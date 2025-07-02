// Simple in-memory rate limiter for development
// In production, use Redis or similar

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

const DEFAULT_MAX = 100
const DEFAULT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes

export async function rateLimit(
  identifier: string,
  options: { max?: number; windowMs?: number } = {}
): Promise<boolean> {
  const max = options.max || DEFAULT_MAX
  const windowMs = options.windowMs || DEFAULT_WINDOW_MS
  const now = Date.now()
  
  const entry = rateLimitStore.get(identifier)
  
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }
  
  if (entry.count >= max) {
    return false
  }
  
  entry.count++
  rateLimitStore.set(identifier, entry)
  
  return true
}

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Clean up every minute
