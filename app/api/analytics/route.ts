import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getQueryParams, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { ErrorCodes } from '@/lib/types'

const AnalyticsQuerySchema = z.object({
  portfolio_id: z.string().uuid().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  granularity: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
})

// Get user analytics data
async function handleGetAnalytics(request: NextRequest, context: { user: any }) {
  const queryParams = getQueryParams(request, AnalyticsQuerySchema)

  try {
    // Get user's investments for calculation
    let investmentQuery = supabaseAdmin
      .from('investments')
      .select(`
        *,
        products:product_id(name, type, risk_level, current_apy, underlying_assets)
      `)
      .eq('user_id', context.user.id)
      .eq('status', 'active')

    if (queryParams.portfolio_id) {
      investmentQuery = investmentQuery.eq('portfolio_id', queryParams.portfolio_id)
    }

    const { data: investments, error: investmentError } = await investmentQuery

    if (investmentError) {
      throw investmentError
    }

    // Calculate portfolio metrics
    const totalInvested = investments?.reduce((sum: number, inv: any) => sum + Number(inv.amount), 0) || 0
    const totalValue = investments?.reduce((sum: number, inv: any) => sum + Number(inv.current_value), 0) || 0
    const totalReturn = totalValue - totalInvested
    const returnPercentage = totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0

    // Calculate asset allocation
    const assetAllocation: Record<string, number> = {}
    const typeAllocation: Record<string, number> = {}
    
    investments?.forEach((inv: any) => {
      const product = inv.products
      const invValue = Number(inv.current_value)
      
      // Type allocation
      typeAllocation[product.type] = (typeAllocation[product.type] || 0) + invValue
      
      // Asset allocation (underlying assets)
      product.underlying_assets?.forEach((asset: string) => {
        assetAllocation[asset] = (assetAllocation[asset] || 0) + invValue / product.underlying_assets.length
      })
    })

    // Convert to percentages
    Object.keys(typeAllocation).forEach(key => {
      typeAllocation[key] = totalValue > 0 ? (typeAllocation[key] / totalValue) * 100 : 0
    })
    
    Object.keys(assetAllocation).forEach(key => {
      assetAllocation[key] = totalValue > 0 ? (assetAllocation[key] / totalValue) * 100 : 0
    })

    // Risk assessment
    const riskLevels = investments?.map((inv: any) => inv.products.risk_level) || []
    const riskCounts = riskLevels.reduce((acc: any, level: string) => {
      acc[level] = (acc[level] || 0) + 1
      return acc
    }, {})

    let overallRisk = 'low'
    if (riskCounts.high > riskCounts.medium && riskCounts.high > riskCounts.low) {
      overallRisk = 'high'
    } else if (riskCounts.medium >= riskCounts.low) {
      overallRisk = 'medium'
    }

    // Performance metrics (simplified - in production you'd calculate from historical data)
    const averageAPY = investments?.reduce((sum: number, inv: any) => sum + Number(inv.products.current_apy), 0) / (investments?.length || 1) || 0
    const estimatedAnnualReturn = totalInvested * averageAPY

    // Get recent transactions
    const { data: recentTransactions } = await supabaseAdmin
      .from('transactions')
      .select('*')
      .eq('user_id', context.user.id)
      .order('created_at', { ascending: false })
      .limit(10)

    const analytics = {
      summary: {
        total_invested: totalInvested,
        total_value: totalValue,
        total_return: totalReturn,
        return_percentage: returnPercentage,
        investment_count: investments?.length || 0,
        average_apy: averageAPY,
        estimated_annual_return: estimatedAnnualReturn,
        overall_risk: overallRisk,
      },
      allocation: {
        by_type: typeAllocation,
        by_asset: assetAllocation,
      },
      risk_assessment: {
        overall_risk: overallRisk,
        risk_distribution: riskCounts,
      },
      recent_transactions: recentTransactions,
      performance: {
        // In production, this would come from the analytics table
        // with historical performance data
        daily_returns: [],
        cumulative_returns: returnPercentage,
        volatility: 0, // Would be calculated from historical data
        sharpe_ratio: null,
        max_drawdown: 0,
      },
    }

    return successResponse(analytics)
  } catch (error) {
    console.error('Get analytics error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch analytics',
      500
    )
  }
}

export const GET = createApiHandler(handleGetAnalytics, {
  auth: true,
  rateLimit: { max: 100, windowMs: 60000 }, // 100 requests per minute
})
