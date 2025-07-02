import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getRequestBody, getQueryParams, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { CreateInvestmentRequestSchema, PaginationQuerySchema, ErrorCodes } from '@/lib/types'

// Create new investment
async function handleCreateInvestment(request: NextRequest, context: { user: any }) {
  const body = await getRequestBody(request, CreateInvestmentRequestSchema)

  try {
    // Get product details
    const { data: product, error: productError } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('id', body.product_id)
      .eq('status', 'active')
      .single()

    if (productError || !product) {
      return errorResponse(
        ErrorCodes.PRODUCT_NOT_AVAILABLE,
        'Product not found or not available',
        404
      )
    }

    // Validate investment amount
    if (body.amount < product.min_investment) {
      return errorResponse(
        ErrorCodes.VALIDATION_ERROR,
        `Minimum investment amount is ${product.min_investment}`,
        400
      )
    }

    if (product.max_investment && body.amount > product.max_investment) {
      return errorResponse(
        ErrorCodes.VALIDATION_ERROR,
        `Maximum investment amount is ${product.max_investment}`,
        400
      )
    }

    // Check product capacity
    if (product.current_capacity + body.amount > product.total_capacity) {
      return errorResponse(
        ErrorCodes.PRODUCT_NOT_AVAILABLE,
        'Insufficient product capacity',
        400
      )
    }

    // Get or create portfolio
    let portfolioId = body.portfolio_id
    if (!portfolioId) {
      const { data: defaultPortfolio } = await supabaseAdmin
        .from('portfolios')
        .select('id')
        .eq('user_id', context.user.id)
        .limit(1)
        .single()
      
      portfolioId = defaultPortfolio?.id
    }

    // Calculate maturity date
    const maturityDate = new Date()
    maturityDate.setDate(maturityDate.getDate() + product.duration_days)

    // Create investment
    const { data: investment, error: investmentError } = await supabaseAdmin
      .from('investments')
      .insert({
        user_id: context.user.id,
        portfolio_id: portfolioId,
        product_id: body.product_id,
        amount: body.amount,
        purchase_price: body.amount,
        current_value: body.amount,
        status: 'pending',
        maturity_date: maturityDate.toISOString(),
      })
      .select()
      .single()

    if (investmentError) {
      throw investmentError
    }

    // Update product capacity
    await supabaseAdmin
      .from('products')
      .update({
        current_capacity: product.current_capacity + body.amount,
      })
      .eq('id', body.product_id)

    // Create transaction record
    await supabaseAdmin
      .from('transactions')
      .insert({
        user_id: context.user.id,
        investment_id: investment.id,
        type: 'purchase',
        amount: body.amount,
        status: 'pending',
        description: `Purchase of ${product.name}`,
      })

    // TODO: Call Rust service to create on-chain investment
    // const rustServiceResponse = await fetch(`${process.env.RUST_SERVICE_URL}/api/v1/investment/create`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': process.env.RUST_SERVICE_API_KEY,
    //   },
    //   body: JSON.stringify({
    //     investor_wallet: context.user.wallet_address,
    //     product_id: body.product_id,
    //     amount: body.amount,
    //     duration: product.duration_days,
    //   }),
    // })

    return successResponse(investment)
  } catch (error) {
    console.error('Create investment error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to create investment',
      500
    )
  }
}

// Get user investments
async function handleGetInvestments(request: NextRequest, context: { user: any }) {
  const queryParams = getQueryParams(request, PaginationQuerySchema.extend({
    status: z.string().optional(),
    portfolio_id: z.string().uuid().optional(),
  }))

  try {
    let query = supabaseAdmin
      .from('investments')
      .select(`
        *,
        products:product_id(name, type, risk_level, current_apy),
        portfolios:portfolio_id(name)
      `, { count: 'exact' })
      .eq('user_id', context.user.id)

    // Apply filters
    if (queryParams.status) {
      query = query.eq('status', queryParams.status)
    }
    if (queryParams.portfolio_id) {
      query = query.eq('portfolio_id', queryParams.portfolio_id)
    }

    // Apply sorting
    if (queryParams.sort_by) {
      query = query.order(queryParams.sort_by, { ascending: queryParams.sort_order === 'asc' })
    } else {
      query = query.order('created_at', { ascending: false })
    }

    // Apply pagination
    const from = (queryParams.page - 1) * queryParams.limit
    const to = from + queryParams.limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) {
      throw error
    }

    const pagination = {
      page: queryParams.page,
      limit: queryParams.limit,
      total: count || 0,
      has_more: (count || 0) > queryParams.page * queryParams.limit,
    }

    return successResponse(data, pagination)
  } catch (error) {
    console.error('Get investments error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch investments',
      500
    )
  }
}

export const POST = createApiHandler(handleCreateInvestment, {
  auth: true,
  rateLimit: { max: 20, windowMs: 60000 }, // 20 investments per minute
})

export const GET = createApiHandler(handleGetInvestments, {
  auth: true,
  rateLimit: { max: 100, windowMs: 60000 }, // 100 requests per minute
})
