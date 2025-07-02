import { z } from 'zod'

// User Types
export const UserSchema = z.object({
  id: z.string().uuid(),
  wallet_address: z.string(),
  email: z.string().email().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  bio: z.string().optional(),
  avatar_url: z.string().url().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  terms_accepted: z.boolean().default(false),
  kyc_status: z.enum(['pending', 'approved', 'rejected']).default('pending'),
  risk_tolerance: z.enum(['conservative', 'moderate', 'aggressive']).optional(),
})

export type User = z.infer<typeof UserSchema>

// Product Types
export const ProductTypeEnum = z.enum(['cdo_senior', 'cdo_mezzanine', 'cdo_junior', 'stik_pak'])

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  type: ProductTypeEnum,
  risk_level: z.enum(['low', 'medium', 'high']),
  min_investment: z.number().positive(),
  max_investment: z.number().positive().optional(),
  current_apy: z.number(),
  expected_apy: z.number(),
  duration_days: z.number().positive(),
  total_capacity: z.number().positive(),
  current_capacity: z.number().nonnegative(),
  underlying_assets: z.array(z.string()),
  status: z.enum(['draft', 'active', 'paused', 'closed']),
  blockchain_address: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export type Product = z.infer<typeof ProductSchema>

// Portfolio Types
export const PortfolioSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional(),
  total_value: z.number().nonnegative(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export type Portfolio = z.infer<typeof PortfolioSchema>

// Investment Types
export const InvestmentSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  portfolio_id: z.string().uuid(),
  product_id: z.string().uuid(),
  amount: z.number().positive(),
  purchase_price: z.number().positive(),
  current_value: z.number().nonnegative(),
  status: z.enum(['pending', 'active', 'matured', 'cancelled']),
  purchase_date: z.string().datetime(),
  maturity_date: z.string().datetime(),
  blockchain_tx_hash: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export type Investment = z.infer<typeof InvestmentSchema>

// Transaction Types
export const TransactionTypeEnum = z.enum(['deposit', 'withdrawal', 'purchase', 'yield', 'fee'])

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  investment_id: z.string().uuid().optional(),
  type: TransactionTypeEnum,
  amount: z.number(),
  fee: z.number().nonnegative().default(0),
  status: z.enum(['pending', 'completed', 'failed', 'cancelled']),
  blockchain_tx_hash: z.string().optional(),
  description: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
})

export type Transaction = z.infer<typeof TransactionSchema>

// Analytics Types
export const AnalyticsSchema = z.object({
  user_id: z.string().uuid(),
  portfolio_id: z.string().uuid().optional(),
  date: z.string().date(),
  total_value: z.number().nonnegative(),
  daily_return: z.number(),
  cumulative_return: z.number(),
  volatility: z.number().nonnegative(),
  sharpe_ratio: z.number().optional(),
  max_drawdown: z.number().nonnegative(),
  asset_allocation: z.record(z.number()),
  metadata: z.record(z.any()).optional(),
})

export type Analytics = z.infer<typeof AnalyticsSchema>

// Market Data Types
export const MarketDataSchema = z.object({
  symbol: z.string(),
  price: z.number().positive(),
  change_24h: z.number(),
  change_percentage_24h: z.number(),
  volume_24h: z.number().nonnegative(),
  market_cap: z.number().nonnegative().optional(),
  last_updated: z.string().datetime(),
})

export type MarketData = z.infer<typeof MarketDataSchema>

// API Response Types
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.any().optional(),
  }).optional(),
  pagination: z.object({
    page: z.number().positive(),
    limit: z.number().positive(),
    total: z.number().nonnegative(),
    has_more: z.boolean(),
  }).optional(),
})

export type ApiResponse<T = any> = {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  pagination?: {
    page: number
    limit: number
    total: number
    has_more: boolean
  }
}

// Request Types
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().positive().default(1),
  limit: z.coerce.number().positive().max(100).default(20),
  sort_by: z.string().optional(),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
})

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>

export const CreateInvestmentRequestSchema = z.object({
  product_id: z.string().uuid(),
  amount: z.number().positive(),
  portfolio_id: z.string().uuid().optional(),
})

export type CreateInvestmentRequest = z.infer<typeof CreateInvestmentRequestSchema>

export const UpdateUserProfileRequestSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email().optional(),
  bio: z.string().optional(),
  risk_tolerance: z.enum(['conservative', 'moderate', 'aggressive']).optional(),
})

export type UpdateUserProfileRequest = z.infer<typeof UpdateUserProfileRequestSchema>

// Blockchain Types
export const SolanaTransactionSchema = z.object({
  signature: z.string(),
  slot: z.number(),
  block_time: z.number(),
  fee: z.number(),
  status: z.enum(['confirmed', 'finalized', 'failed']),
  accounts: z.array(z.string()),
  program_id: z.string(),
  instruction_data: z.string(),
})

export type SolanaTransaction = z.infer<typeof SolanaTransactionSchema>

// Error Types
export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export const ErrorCodes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  PRODUCT_NOT_AVAILABLE: 'PRODUCT_NOT_AVAILABLE',
  WALLET_NOT_CONNECTED: 'WALLET_NOT_CONNECTED',
  BLOCKCHAIN_ERROR: 'BLOCKCHAIN_ERROR',
} as const
