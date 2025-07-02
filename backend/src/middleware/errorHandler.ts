import { Request, Response, NextFunction } from 'express';
import { logger } from '@/utils/logger';
import { ApiResponse } from '@/types/api';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error('Unhandled error', {
    error: error.message,
    stack: error.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
    ip: req.ip,
  });

  // Default error response
  let response: ApiResponse = {
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
    },
  };

  // Handle specific error types
  if (error.name === 'ValidationError') {
    response.error = {
      code: 'VALIDATION_ERROR',
      message: 'Invalid input data',
      details: error.details,
    };
    res.status(400).json(response);
    return;
  }

  if (error.name === 'UnauthorizedError') {
    response.error = {
      code: 'UNAUTHORIZED',
      message: 'Authentication required',
    };
    res.status(401).json(response);
    return;
  }

  if (error.name === 'ForbiddenError') {
    response.error = {
      code: 'FORBIDDEN',
      message: 'Access denied',
    };
    res.status(403).json(response);
    return;
  }

  if (error.name === 'NotFoundError') {
    response.error = {
      code: 'NOT_FOUND',
      message: 'Resource not found',
    };
    res.status(404).json(response);
    return;
  }

  if (error.name === 'ConflictError') {
    response.error = {
      code: 'CONFLICT',
      message: 'Resource already exists',
    };
    res.status(409).json(response);
    return;
  }

  // Database errors
  if (error.code === '23505') { // PostgreSQL unique violation
    response.error = {
      code: 'DUPLICATE_ENTRY',
      message: 'Resource already exists',
    };
    res.status(409).json(response);
    return;
  }

  if (error.code === '23503') { // PostgreSQL foreign key violation
    response.error = {
      code: 'REFERENCE_ERROR',
      message: 'Referenced resource not found',
    };
    res.status(400).json(response);
    return;
  }

  // Default to 500 for unhandled errors
  res.status(500).json(response);
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const response: ApiResponse = {
    success: false,
    error: {
      code: 'ENDPOINT_NOT_FOUND',
      message: `Endpoint ${req.method} ${req.path} not found`,
    },
  };

  res.status(404).json(response);
};

// Custom error classes
export class ValidationError extends Error {
  public details: any;
  
  constructor(message: string, details?: any) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  constructor(message: string = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends Error {
  constructor(message: string = 'Not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends Error {
  constructor(message: string = 'Conflict') {
    super(message);
    this.name = 'ConflictError';
  }
}
