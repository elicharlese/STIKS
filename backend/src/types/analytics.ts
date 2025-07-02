export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change_24h: number;
  change_percentage_24h: number;
  volume_24h: number;
  market_cap: number;
  last_updated: Date;
}

export interface PortfolioAnalytics {
  user_id: string;
  total_value: number;
  total_invested: number;
  total_return: number;
  return_percentage: number;
  monthly_yield: number;
  risk_score: number;
  diversification_score: number;
  performance_metrics: PerformanceMetrics;
  asset_allocation: AssetAllocation[];
  updated_at: Date;
}

export interface PerformanceMetrics {
  total_return: number;
  annualized_return: number;
  volatility: number;
  sharpe_ratio: number;
  max_drawdown: number;
  beta: number;
  alpha: number;
  var_95: number; // Value at Risk
  periods: {
    '1d': number;
    '7d': number;
    '30d': number;
    '90d': number;
    '365d': number;
    'ytd': number;
    'all_time': number;
  };
}

export interface AssetAllocation {
  category: string;
  allocation_percentage: number;
  value: number;
  target_percentage?: number;
}

export interface RiskAssessment {
  user_id: string;
  overall_risk_score: number;
  concentration_risk: number;
  liquidity_risk: number;
  market_risk: number;
  credit_risk: number;
  recommendations: string[];
  last_assessed: Date;
}

export interface Correlation {
  asset1: string;
  asset2: string;
  correlation_coefficient: number;
  period: string;
  last_calculated: Date;
}
