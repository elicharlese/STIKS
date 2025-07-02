import { Request, Response, NextFunction } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    wallet_address?: string;
    role: string;
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    hasMore?: boolean;
  };
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface FilterQuery {
  search?: string;
  status?: string;
  type?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
}

export type Controller = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export type Middleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

export interface NotificationPayload {
  user_id: string;
  type: 'email' | 'push' | 'sms';
  template: string;
  data: Record<string, any>;
  scheduled_for?: Date;
}

export interface CacheConfig {
  ttl: number; // Time to live in seconds
  key: string;
  tags?: string[];
}

export interface JobConfig {
  name: string;
  cron: string;
  enabled: boolean;
  timezone?: string;
}
