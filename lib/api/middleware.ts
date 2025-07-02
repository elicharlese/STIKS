import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { ApiError, ApiResponse, ErrorCodes } from '../types'
import { rateLimit } from './rate-limit'
import { logger } from '../utils/logger'
import { supabaseAdmin } from '../supabase/client'

export type ApiHandler<T = any> = (
  request: NextRequest,
  context: { params?: any }
) => Promise<NextResponse<ApiResponse<T>>>

export type AuthenticatedApiHandler<T = any> = (
  request: NextRequest,
  context: { params?: any; user: any }
) => Promise<NextResponse<ApiResponse<T>>>

/**
 * Creates a standardized API response
 */
export function createApiResponse<T>(
  data?: T,
  success: boolean = true,
  error?: { code: string; message: string; details?: any },
  pagination?: { page: number; limit: number; total: number; has_more: boolean }
): ApiResponse<T> {
  return {
    success,
    data,
    error,
    pagination,
  }
}

/**
 * Creates a success response with data
 */
export function successResponse<T>(
  data: T,
  pagination?: { page: number; limit: number; total: number; has_more: boolean }
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(createApiResponse(data, true, undefined, pagination))
}

/**
 * Creates an error response
 */
export function errorResponse(
  code: string,
  message: string,
  statusCode: number = 500,
  details?: any
): NextResponse<ApiResponse> {
  logger.error('API Error', { code, message, statusCode, details })
  
  return NextResponse.json(
    createApiResponse(undefined, false, { code, message, details }),
    { status: statusCode }
  )
}

/**
 * Validates request data against a schema
 */
export function validateRequest<T>(schema: z.ZodSchema<T>, data: any): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ApiError(
        ErrorCodes.VALIDATION_ERROR,
        'Invalid request data',
        400,
        error.errors
      )
    }
    throw error
  }
}

/**
 * Extracts and validates query parameters
 */
export function getQueryParams(request: NextRequest, schema?: z.ZodSchema) {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams.entries())
  
  if (schema) {
    return validateRequest(schema, params)
  }
  
  return params
}

/**
 * Extracts and validates request body
 */
export async function getRequestBody<T>(request: NextRequest, schema?: z.ZodSchema<T>): Promise<T> {
  try {
    const body = await request.json()
    
    if (schema) {
      return validateRequest(schema, body)
    }
    
    return body
  } catch (error) {
    throw new ApiError(
      ErrorCodes.VALIDATION_ERROR,
      'Invalid JSON in request body',
      400
    )
  }
}

/**
 * Extracts Bearer token from Authorization header
 */
function getAuthToken(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return null
  
  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null
  
  return parts[1]
}

/**
 * Middleware to handle authentication
 */
export function withAuth<T>(handler: AuthenticatedApiHandler<T>): ApiHandler<T> {
  return async (request: NextRequest, context: { params?: any }) => {
    try {
      const token = getAuthToken(request)
      
      if (!token) {
        return errorResponse(
          ErrorCodes.UNAUTHORIZED,
          'Authentication token required',
          401
        )
      }

      const { data: { user }, error } = await supabaseAdmin.auth.getUser(token)

      if (error || !user) {
        return errorResponse(
          ErrorCodes.UNAUTHORIZED,
          'Invalid authentication token',
          401
        )
      }

      return handler(request, { ...context, user })
    } catch (error) {
      logger.error('Authentication error', error)
      return errorResponse(
        ErrorCodes.UNAUTHORIZED,
        'Authentication failed',
        401
      )
    }
  }
}

/**
 * Get client IP address
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (real) {
    return real.trim()
  }
  
  return 'anonymous'
}

/**
 * Middleware to handle rate limiting
 */
export function withRateLimit<T>(handler: ApiHandler<T>, options?: { max?: number; windowMs?: number }): ApiHandler<T> {
  return async (request: NextRequest, context: { params?: any }) => {
    try {
      const identifier = getClientIP(request)
      const allowed = await rateLimit(identifier, options)
      
      if (!allowed) {
        return errorResponse(
          ErrorCodes.RATE_LIMIT_EXCEEDED,
          'Too many requests, please try again later',
          429
        )
      }

      return handler(request, context)
    } catch (error) {
      logger.error('Rate limit error', error)
      return handler(request, context) // Continue on rate limit error
    }
  }
}

/**
 * Main API wrapper that handles errors and provides consistent structure
 */
export function withApiHandler<T>(handler: ApiHandler<T>): ApiHandler<T> {
  return async (request: NextRequest, context: { params?: any }) => {
    try {
      const startTime = Date.now()
      
      logger.info('API Request', {
        method: request.method,
        url: request.url,
        userAgent: request.headers.get('user-agent'),
      })

      const response = await handler(request, context)
      
      const duration = Date.now() - startTime
      logger.info('API Response', {
        method: request.method,
        url: request.url,
        status: response.status,
        duration,
      })

      return response
    } catch (error) {
      logger.error('Unhandled API error', error)
      
      if (error instanceof ApiError) {
        return errorResponse(error.code, error.message, error.statusCode, error.details)
      }

      return errorResponse(
        ErrorCodes.INTERNAL_ERROR,
        'Internal server error',
        500
      )
    }
  }
}

/**
 * Combines multiple middlewares
 */
export function createApiHandler<T>(
  handler: ApiHandler<T> | AuthenticatedApiHandler<T>,
  options: {
    auth?: boolean
    rateLimit?: { max?: number; windowMs?: number }
  } = {}
): ApiHandler<T> {
  let wrappedHandler = handler as ApiHandler<T>

  if (options.auth) {
    wrappedHandler = withAuth(handler as AuthenticatedApiHandler<T>)
  }

  if (options.rateLimit) {
    wrappedHandler = withRateLimit(wrappedHandler, options.rateLimit)
  }

  return withApiHandler(wrappedHandler)
}

/**
 * CORS headers for API responses
 */
export function setCorsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Max-Age', '86400')
  
  return response
}

/**
 * Handles OPTIONS requests for CORS preflight
 */
export function handleCorsOptions(): NextResponse {
  const response = new NextResponse(null, { status: 200 })
  return setCorsHeaders(response)
}
