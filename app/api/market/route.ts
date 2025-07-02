import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getQueryParams, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { ErrorCodes } from '@/lib/types'

const MarketQuerySchema = z.object({
  symbols: z.string().optional(), // Comma-separated list
  limit: z.coerce.number().min(1).max(100).default(10),
})

// Get market data
async function handleGetMarketData(request: NextRequest) {
  const queryParams = getQueryParams(request, MarketQuerySchema)

  try {
    let query = supabaseAdmin
      .from('market_data')
      .select('*')
      .order('last_updated', { ascending: false })

    if (queryParams.symbols) {
      const symbolList = queryParams.symbols.split(',').map((s: string) => s.trim().toUpperCase())
      query = query.in('symbol', symbolList)
    }

    query = query.limit(queryParams.limit)

    const { data: marketData, error } = await query

    if (error) {
      throw error
    }

    // Get the latest entry for each symbol
    const latestData = marketData?.reduce((acc: any[], current: any) => {
      const existing = acc.find(item => item.symbol === current.symbol)
      if (!existing || new Date(current.last_updated) > new Date(existing.last_updated)) {
        if (existing) {
          const index = acc.indexOf(existing)
          acc[index] = current
        } else {
          acc.push(current)
        }
      }
      return acc
    }, [])

    return successResponse(latestData)
  } catch (error) {
    console.error('Get market data error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch market data',
      500
    )
  }
}

export const GET = createApiHandler(handleGetMarketData, {
  rateLimit: { max: 200, windowMs: 60000 }, // 200 requests per minute
})
