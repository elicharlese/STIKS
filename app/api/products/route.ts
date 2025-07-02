import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getQueryParams, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { PaginationQuerySchema, ErrorCodes } from '@/lib/types'

// Get all products with pagination and filtering
async function handleGetProducts(request: NextRequest) {
  const queryParams = getQueryParams(request, PaginationQuerySchema.extend({
    type: z.string().optional(),
    risk_level: z.string().optional(),
    status: z.string().optional(),
  }))

  try {
    let query = supabaseAdmin
      .from('products')
      .select('*', { count: 'exact' })

    // Apply filters
    if (queryParams.type) {
      query = query.eq('type', queryParams.type)
    }
    if (queryParams.risk_level) {
      query = query.eq('risk_level', queryParams.risk_level)
    }
    if (queryParams.status) {
      query = query.eq('status', queryParams.status)
    } else {
      // Default to active products only
      query = query.eq('status', 'active')
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
    console.error('Get products error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch products',
      500
    )
  }
}

export const GET = createApiHandler(handleGetProducts, {
  rateLimit: { max: 100, windowMs: 60000 }, // 100 requests per minute
})
