import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getRequestBody, getQueryParams, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { PaginationQuerySchema, ErrorCodes } from '@/lib/types'

const CreatePortfolioSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
})

// Create new portfolio
async function handleCreatePortfolio(request: NextRequest, context: { user: any }) {
  const body = await getRequestBody(request, CreatePortfolioSchema)

  try {
    const { data: portfolio, error } = await supabaseAdmin
      .from('portfolios')
      .insert({
        user_id: context.user.id,
        name: body.name,
        description: body.description,
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return successResponse(portfolio)
  } catch (error) {
    console.error('Create portfolio error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to create portfolio',
      500
    )
  }
}

// Get user portfolios with summary
async function handleGetPortfolios(request: NextRequest, context: { user: any }) {
  const queryParams = getQueryParams(request, PaginationQuerySchema)

  try {
    // Get portfolios with investment summary
    let query = supabaseAdmin
      .from('portfolios')
      .select(`
        *,
        investments!inner(
          amount,
          current_value,
          status
        )
      `, { count: 'exact' })
      .eq('user_id', context.user.id)

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

    // Calculate portfolio summaries
    const portfoliosWithSummary = data?.map((portfolio: any) => {
      const activeInvestments = portfolio.investments?.filter((inv: any) => inv.status === 'active') || []
      const totalValue = activeInvestments.reduce((sum: number, inv: any) => sum + Number(inv.current_value), 0)
      const totalInvested = activeInvestments.reduce((sum: number, inv: any) => sum + Number(inv.amount), 0)
      const totalReturn = totalValue - totalInvested
      const returnPercentage = totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0

      return {
        ...portfolio,
        total_value: totalValue,
        total_invested: totalInvested,
        total_return: totalReturn,
        return_percentage: returnPercentage,
        investment_count: activeInvestments.length,
        investments: undefined, // Remove detailed investments from summary
      }
    })

    const pagination = {
      page: queryParams.page,
      limit: queryParams.limit,
      total: count || 0,
      has_more: (count || 0) > queryParams.page * queryParams.limit,
    }

    return successResponse(portfoliosWithSummary, pagination)
  } catch (error) {
    console.error('Get portfolios error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch portfolios',
      500
    )
  }
}

export const POST = createApiHandler(handleCreatePortfolio, {
  auth: true,
  rateLimit: { max: 10, windowMs: 60000 }, // 10 portfolios per minute
})

export const GET = createApiHandler(handleGetPortfolios, {
  auth: true,
  rateLimit: { max: 100, windowMs: 60000 }, // 100 requests per minute
})
