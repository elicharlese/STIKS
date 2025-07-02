-- Initial schema for STIKS application
-- This creates all the necessary tables for users, products, investments, etc.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable RLS
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_address TEXT UNIQUE,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  terms_accepted BOOLEAN DEFAULT FALSE,
  kyc_status TEXT DEFAULT 'pending' CHECK (kyc_status IN ('pending', 'approved', 'rejected')),
  risk_tolerance TEXT CHECK (risk_tolerance IN ('conservative', 'moderate', 'aggressive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Products table
CREATE TABLE public.products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('cdo_senior', 'cdo_mezzanine', 'cdo_junior', 'stik_pak')),
  risk_level TEXT NOT NULL CHECK (risk_level IN ('low', 'medium', 'high')),
  min_investment DECIMAL(18,6) NOT NULL CHECK (min_investment > 0),
  max_investment DECIMAL(18,6) CHECK (max_investment > 0),
  current_apy DECIMAL(5,4) NOT NULL,
  expected_apy DECIMAL(5,4) NOT NULL,
  duration_days INTEGER NOT NULL CHECK (duration_days > 0),
  total_capacity DECIMAL(18,6) NOT NULL CHECK (total_capacity > 0),
  current_capacity DECIMAL(18,6) NOT NULL DEFAULT 0 CHECK (current_capacity >= 0),
  underlying_assets TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'closed')),
  blockchain_address TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT capacity_check CHECK (current_capacity <= total_capacity)
);

-- Portfolios table
CREATE TABLE public.portfolios (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  total_value DECIMAL(18,6) NOT NULL DEFAULT 0 CHECK (total_value >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Investments table
CREATE TABLE public.investments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  portfolio_id UUID REFERENCES public.portfolios(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE RESTRICT,
  amount DECIMAL(18,6) NOT NULL CHECK (amount > 0),
  purchase_price DECIMAL(18,6) NOT NULL CHECK (purchase_price > 0),
  current_value DECIMAL(18,6) NOT NULL DEFAULT 0 CHECK (current_value >= 0),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'matured', 'cancelled')),
  purchase_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  maturity_date TIMESTAMP WITH TIME ZONE NOT NULL,
  blockchain_tx_hash TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE public.transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  investment_id UUID REFERENCES public.investments(id) ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'purchase', 'yield', 'fee')),
  amount DECIMAL(18,6) NOT NULL,
  fee DECIMAL(18,6) NOT NULL DEFAULT 0 CHECK (fee >= 0),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  blockchain_tx_hash TEXT,
  description TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics table
CREATE TABLE public.analytics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  portfolio_id UUID REFERENCES public.portfolios(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  total_value DECIMAL(18,6) NOT NULL DEFAULT 0 CHECK (total_value >= 0),
  daily_return DECIMAL(10,6) NOT NULL DEFAULT 0,
  cumulative_return DECIMAL(10,6) NOT NULL DEFAULT 0,
  volatility DECIMAL(10,6) NOT NULL DEFAULT 0 CHECK (volatility >= 0),
  sharpe_ratio DECIMAL(10,6),
  max_drawdown DECIMAL(10,6) NOT NULL DEFAULT 0 CHECK (max_drawdown >= 0),
  asset_allocation JSONB DEFAULT '{}',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE (user_id, portfolio_id, date)
);

-- Market data table
CREATE TABLE public.market_data (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  symbol TEXT NOT NULL,
  price DECIMAL(18,8) NOT NULL CHECK (price > 0),
  change_24h DECIMAL(18,8) NOT NULL DEFAULT 0,
  change_percentage_24h DECIMAL(10,6) NOT NULL DEFAULT 0,
  volume_24h DECIMAL(18,8) NOT NULL DEFAULT 0 CHECK (volume_24h >= 0),
  market_cap DECIMAL(18,2) CHECK (market_cap >= 0),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE (symbol, last_updated)
);

-- User settings table
CREATE TABLE public.user_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE,
  default_investment_amount DECIMAL(18,6) DEFAULT 5000,
  preferred_lock_period INTEGER DEFAULT 60,
  auto_reinvest BOOLEAN DEFAULT FALSE,
  notification_preferences JSONB DEFAULT '{}',
  display_preferences JSONB DEFAULT '{}',
  security_preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Asset folders table (for organization)
CREATE TABLE public.asset_folders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE (user_id, name)
);

-- Asset tags table
CREATE TABLE public.asset_tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  color TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE (user_id, name)
);

-- Investment tags junction table
CREATE TABLE public.investment_tags (
  investment_id UUID REFERENCES public.investments(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.asset_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (investment_id, tag_id)
);

-- Investment folders junction table
CREATE TABLE public.investment_folders (
  investment_id UUID REFERENCES public.investments(id) ON DELETE CASCADE,
  folder_id UUID REFERENCES public.asset_folders(id) ON DELETE CASCADE,
  PRIMARY KEY (investment_id, folder_id)
);

-- Governance proposals table
CREATE TABLE public.governance_proposals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  proposer_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'passed', 'rejected', 'executed')),
  voting_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  voting_end TIMESTAMP WITH TIME ZONE NOT NULL,
  votes_for DECIMAL(18,6) DEFAULT 0,
  votes_against DECIMAL(18,6) DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Governance votes table
CREATE TABLE public.governance_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  proposal_id UUID REFERENCES public.governance_proposals(id) ON DELETE CASCADE,
  voter_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  vote_power DECIMAL(18,6) NOT NULL CHECK (vote_power > 0),
  vote_type TEXT NOT NULL CHECK (vote_type IN ('for', 'against', 'abstain')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE (proposal_id, voter_id)
);

-- Create indexes for better performance
CREATE INDEX idx_users_wallet_address ON public.users(wallet_address);
CREATE INDEX idx_products_type ON public.products(type);
CREATE INDEX idx_products_status ON public.products(status);
CREATE INDEX idx_investments_user_id ON public.investments(user_id);
CREATE INDEX idx_investments_product_id ON public.investments(product_id);
CREATE INDEX idx_investments_status ON public.investments(status);
CREATE INDEX idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX idx_transactions_type ON public.transactions(type);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_analytics_user_portfolio_date ON public.analytics(user_id, portfolio_id, date);
CREATE INDEX idx_market_data_symbol ON public.market_data(symbol);
CREATE INDEX idx_market_data_last_updated ON public.market_data(last_updated);

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portfolios_updated_at BEFORE UPDATE ON public.portfolios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_investments_updated_at BEFORE UPDATE ON public.investments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at BEFORE UPDATE ON public.user_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_asset_folders_updated_at BEFORE UPDATE ON public.asset_folders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_governance_proposals_updated_at BEFORE UPDATE ON public.governance_proposals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
