import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { config } from '@/config';
import { supabase } from '@/config/database';
import { AuthenticatedRequest } from '@/types/api';
import { logger } from '@/utils/logger';

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Access token required',
        },
      });
      return;
    }

    const token = authHeader.substring(7);

    try {
      const decoded = jwt.verify(token, config.auth.jwt.secret) as any;
      
      // Fetch user from database
      const { data: user, error } = await supabase
        .from('users')
        .select('id, email, wallet_address, role')
        .eq('id', decoded.sub)
        .eq('is_active', true)
        .single();

      if (error || !user) {
        logger.warn('Authentication failed: User not found', { userId: decoded.sub, error });
        res.status(401).json({
          success: false,
          error: {
            code: 'USER_NOT_FOUND',
            message: 'User not found or inactive',
          },
        });
        return;
      }

      req.user = {
        id: user.id,
        email: user.email,
        wallet_address: user.wallet_address,
        role: user.role || 'user',
      };

      next();
    } catch (jwtError) {
      logger.warn('JWT verification failed', { error: jwtError });
      res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_TOKEN',
          message: 'Invalid or expired token',
        },
      });
    }
  } catch (error) {
    logger.error('Authentication middleware error', { error });
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Authentication error',
      },
    });
  }
};

export const requireRole = (roles: string | string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
        },
      });
      return;
    }

    const allowedRoles = Array.isArray(roles) ? roles : [roles];
    
    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient permissions',
        },
      });
      return;
    }

    next();
  };
};

export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next();
    return;
  }

  try {
    await authenticate(req, res, next);
  } catch (error) {
    // Continue without authentication if token is invalid
    next();
  }
};
