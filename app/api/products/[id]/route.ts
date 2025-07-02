import { NextRequest } from 'next/server'
import { createApiHandler, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { ErrorCodes } from '@/lib/types'

// Get single product by ID
async function handleGetProduct(request: NextRequest, context: { params?: any }) {
  const params = context.params as { id: string }
  
  try {
    const { data: product, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('id', params.id)
      .eq('status', 'active') // Only return active products
      .single()

    if (error || !product) {
      return errorResponse(
        ErrorCodes.NOT_FOUND,
        'Product not found',
        404
      )
    }

    return successResponse(product)
  } catch (error) {
    console.error('Get product error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to fetch product',
      500
    )
  }
}

export const GET = createApiHandler(handleGetProduct, {
  rateLimit: { max: 200, windowMs: 60000 }, // 200 requests per minute
})
