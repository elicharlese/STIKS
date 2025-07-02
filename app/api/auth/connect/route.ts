import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createApiHandler, getRequestBody, successResponse, errorResponse } from '@/lib/api/middleware'
import { supabaseAdmin } from '@/lib/supabase/client'
import { UpdateUserProfileRequest, UpdateUserProfileRequestSchema, ErrorCodes } from '@/lib/types'

// Connect wallet and create/update user profile
async function handleConnectWallet(request: NextRequest) {
  const body = await getRequestBody(request, UpdateUserProfileRequestSchema.extend({
    wallet_address: z.string().min(1),
  }))

  try {
    // First, try to find existing user by wallet address
    const { data: existingUser } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('wallet_address', body.wallet_address)
      .single()

    if (existingUser) {
      // Update existing user
      const { data: updatedUser, error } = await supabaseAdmin
        .from('users')
        .update({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          bio: body.bio,
          risk_tolerance: body.risk_tolerance,
          updated_at: new Date().toISOString(),
        })
        .eq('wallet_address', body.wallet_address)
        .select()
        .single()

      if (error) {
        throw error
      }

      return successResponse(updatedUser)
    } else {
      // Create new user
      const { data: newUser, error } = await supabaseAdmin
        .from('users')
        .insert({
          wallet_address: body.wallet_address,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          bio: body.bio,
          risk_tolerance: body.risk_tolerance,
        })
        .select()
        .single()

      if (error) {
        throw error
      }

      // Create default portfolio for new user
      await supabaseAdmin
        .from('portfolios')
        .insert({
          user_id: newUser.id,
          name: 'My Portfolio',
          description: 'Default portfolio',
        })

      // Create default user settings
      await supabaseAdmin
        .from('user_settings')
        .insert({
          user_id: newUser.id,
        })

      return successResponse(newUser)
    }
  } catch (error) {
    console.error('Wallet connection error:', error)
    return errorResponse(
      ErrorCodes.INTERNAL_ERROR,
      'Failed to connect wallet',
      500
    )
  }
}

export const POST = createApiHandler(handleConnectWallet, {
  rateLimit: { max: 10, windowMs: 60000 }, // 10 requests per minute
})
