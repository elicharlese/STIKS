import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';
import { config } from '@/config';
import { logger } from '@/utils/logger';

export const createRateLimit = (options?: {
  windowMs?: number;
  max?: number;
  message?: string;
  keyGenerator?: (req: Request) => string;
}) => {
  return rateLimit({
    windowMs: options?.windowMs || config.security.rateLimit.windowMs,
    max: options?.max || config.security.rateLimit.maxRequests,
    message: {
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: options?.message || 'Too many requests, please try again later',
      },
    },
    keyGenerator: options?.keyGenerator || ((req: Request) => {
      return req.ip || 'unknown';
    }),
    onLimitReached: (req: Request) => {
      logger.warn('Rate limit exceeded', {
        ip: req.ip,
        path: req.path,
        method: req.method,
      });
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

// Default rate limiter
export const rateLimiter = createRateLimit();

// Strict rate limiter for sensitive endpoints
export const strictRateLimit = createRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many attempts, please try again in 15 minutes',
});

// Auth rate limiter
export const authRateLimit = createRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 login attempts per window
  message: 'Too many authentication attempts, please try again in 15 minutes',
  keyGenerator: (req: Request) => {
    // Rate limit by IP and email/wallet if provided
    const body = req.body as any;
    const identifier = body?.email || body?.wallet_address || req.ip;
    return `auth:${identifier}`;
  },
});
