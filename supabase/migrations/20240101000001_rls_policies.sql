-- Row Level Security policies for STIKS application

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.asset_folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.asset_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investment_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.investment_folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.governance_proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.governance_votes ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Products policies (public read, admin write)
CREATE POLICY "Anyone can view active products" ON public.products
  FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage products" ON public.products
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() 
      AND (metadata->>'role' = 'admin' OR metadata->>'role' = 'super_admin')
    )
  );

-- Portfolios policies
CREATE POLICY "Users can view their own portfolios" ON public.portfolios
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own portfolios" ON public.portfolios
  FOR ALL USING (auth.uid() = user_id);

-- Investments policies
CREATE POLICY "Users can view their own investments" ON public.investments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own investments" ON public.investments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own investments" ON public.investments
  FOR UPDATE USING (auth.uid() = user_id);

-- Transactions policies
CREATE POLICY "Users can view their own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" ON public.transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Analytics policies
CREATE POLICY "Users can view their own analytics" ON public.analytics
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can manage analytics" ON public.analytics
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() 
      AND metadata->>'role' = 'system'
    )
  );

-- Market data policies (public read, system write)
CREATE POLICY "Anyone can view market data" ON public.market_data
  FOR SELECT USING (true);

CREATE POLICY "System can manage market data" ON public.market_data
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() 
      AND metadata->>'role' = 'system'
    )
  );

-- User settings policies
CREATE POLICY "Users can view their own settings" ON public.user_settings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own settings" ON public.user_settings
  FOR ALL USING (auth.uid() = user_id);

-- Asset folders policies
CREATE POLICY "Users can view their own folders" ON public.asset_folders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own folders" ON public.asset_folders
  FOR ALL USING (auth.uid() = user_id);

-- Asset tags policies
CREATE POLICY "Users can view their own tags" ON public.asset_tags
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own tags" ON public.asset_tags
  FOR ALL USING (auth.uid() = user_id);

-- Investment tags policies
CREATE POLICY "Users can view their investment tags" ON public.investment_tags
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.investments 
      WHERE id = investment_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage their investment tags" ON public.investment_tags
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.investments 
      WHERE id = investment_id AND user_id = auth.uid()
    )
  );

-- Investment folders policies
CREATE POLICY "Users can view their investment folders" ON public.investment_folders
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.investments 
      WHERE id = investment_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage their investment folders" ON public.investment_folders
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.investments 
      WHERE id = investment_id AND user_id = auth.uid()
    )
  );

-- Governance proposals policies
CREATE POLICY "Anyone can view governance proposals" ON public.governance_proposals
  FOR SELECT USING (true);

CREATE POLICY "Verified users can create proposals" ON public.governance_proposals
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() 
      AND kyc_status = 'approved'
      AND terms_accepted = true
    )
  );

CREATE POLICY "Proposers can update their proposals" ON public.governance_proposals
  FOR UPDATE USING (auth.uid() = proposer_id);

-- Governance votes policies
CREATE POLICY "Anyone can view governance votes" ON public.governance_votes
  FOR SELECT USING (true);

CREATE POLICY "Verified users can vote" ON public.governance_votes
  FOR INSERT WITH CHECK (
    auth.uid() = voter_id AND
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() 
      AND kyc_status = 'approved'
      AND terms_accepted = true
    )
  );

-- Create helper functions
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS TEXT AS $$
BEGIN
  RETURN (
    SELECT metadata->>'role' 
    FROM public.users 
    WHERE id = user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT metadata->>'role' IN ('admin', 'super_admin')
    FROM public.users 
    WHERE id = user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_verified_user(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT kyc_status = 'approved' AND terms_accepted = true
    FROM public.users 
    WHERE id = user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
