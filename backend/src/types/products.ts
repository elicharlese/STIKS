export interface Product {
  id: string;
  name: string;
  type: 'cdo' | 'stik_pak';
  description: string;
  status: 'active' | 'inactive' | 'sold_out' | 'upcoming';
  created_at: Date;
  updated_at: Date;
  metadata: ProductMetadata;
}

export interface ProductMetadata {
  min_investment: number;
  max_investment?: number;
  expected_return: number;
  risk_level: 'low' | 'medium' | 'high';
  maturity_period: number; // in days
  underlying_assets: string[];
  management_fee: number;
  performance_fee: number;
  launch_date: Date;
  close_date?: Date;
}

export interface CDO extends Product {
  type: 'cdo';
  tranches: CDOTranche[];
  total_size: number;
  current_allocation: number;
}

export interface CDOTranche {
  id: string;
  cdo_id: string;
  name: string;
  type: 'senior' | 'mezzanine' | 'junior';
  size: number;
  current_allocation: number;
  yield_rate: number;
  risk_rating: number;
  min_investment: number;
  priority: number; // 1 = highest priority
}

export interface StikPak extends Product {
  type: 'stik_pak';
  strategy: string;
  composition: StikPakComposition[];
  rebalancing_frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
}

export interface StikPakComposition {
  asset_symbol: string;
  asset_name: string;
  target_weight: number;
  current_weight: number;
  last_rebalanced: Date;
}

export interface Investment {
  id: string;
  user_id: string;
  product_id: string;
  product_type: 'cdo' | 'stik_pak';
  tranche_id?: string; // For CDO investments
  amount: number;
  current_value: number;
  entry_price: number;
  current_price: number;
  quantity: number;
  status: 'active' | 'matured' | 'redeemed' | 'defaulted';
  investment_date: Date;
  maturity_date?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Transaction {
  id: string;
  user_id: string;
  investment_id?: string;
  type: 'deposit' | 'withdrawal' | 'investment' | 'redemption' | 'yield_payment' | 'fee';
  amount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'failed' | 'cancelled';
  transaction_hash?: string; // Blockchain transaction hash
  wallet_address?: string;
  metadata?: any;
  created_at: Date;
  confirmed_at?: Date;
}
