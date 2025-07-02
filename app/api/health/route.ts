// Health check endpoint
import { NextRequest } from 'next/server'
import { createApiHandler, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { ErrorCodes } from '@/lib/types'

async function handleHealthCheck(request: NextRequest) {
  try {
    // Check database connection
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('count')
      .limit(1)

    if (error) {
      throw error
    }

    // Check Rust service connection (if configured)
    const rustServiceUrl = process.env.RUST_SERVICE_URL
    let rustServiceStatus = 'not_configured'
    
    if (rustServiceUrl) {
      try {
        const response = await fetch(`${rustServiceUrl}/health`, {
          method: 'GET',
          headers: {
            'x-api-key': process.env.RUST_SERVICE_API_KEY || '',
          },
          signal: AbortSignal.timeout(5000), // 5 second timeout
        })
        
        if (response.ok) {
          rustServiceStatus = 'healthy'
        } else {
          rustServiceStatus = 'unhealthy'
        }
      } catch (error) {
        rustServiceStatus = 'unreachable'
      }
    }

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'healthy',
        rust_service: rustServiceStatus,
      },
      environment: process.env.NODE_ENV || 'unknown',
      version: process.env.npm_package_version || 'unknown',
    }

    return successResponse(healthData)
  } catch (error) {
    console.error('Health check failed:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Health check failed',
      503
    )
  }
}

export const GET = createApiHandler(handleHealthCheck)
