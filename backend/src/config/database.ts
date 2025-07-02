import { createClient } from '@supabase/supabase-js';
import { config } from './index';

// Client for public operations (with RLS enabled)
export const supabase = createClient(
  config.database.supabase.url,
  config.database.supabase.anonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: false,
    },
  }
);

// Admin client for service operations (bypasses RLS)
export const supabaseAdmin = createClient(
  config.database.supabase.url,
  config.database.supabase.serviceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Database table names
export const TABLES = {
  USERS: 'users',
  USER_PROFILES: 'user_profiles',
  USER_SETTINGS: 'user_settings',
  PRODUCTS: 'products',
  CDOS: 'cdos',
  CDO_TRANCHES: 'cdo_tranches',
  STIK_PAKS: 'stik_paks',
  STIK_PAK_COMPOSITIONS: 'stik_pak_compositions',
  INVESTMENTS: 'investments',
  TRANSACTIONS: 'transactions',
  PORTFOLIO_ANALYTICS: 'portfolio_analytics',
  MARKET_DATA: 'market_data',
  WALLET_CONNECTIONS: 'wallet_connections',
  GOVERNANCE_PROPOSALS: 'governance_proposals',
  VOTES: 'votes',
  NOTIFICATIONS: 'notifications',
  AUDIT_LOGS: 'audit_logs',
} as const;
