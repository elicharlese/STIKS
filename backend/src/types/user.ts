export interface User {
  id: string;
  email: string;
  wallet_address?: string;
  first_name?: string;
  last_name?: string;
  bio?: string;
  avatar_url?: string;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
  is_active: boolean;
  email_verified: boolean;
  wallet_verified: boolean;
}

export interface UserProfile {
  user_id: string;
  display_name?: string;
  investment_experience: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  risk_tolerance: 'conservative' | 'moderate' | 'aggressive';
  investment_goals: string[];
  kyc_status: 'pending' | 'approved' | 'rejected';
  kyc_data?: any;
}

export interface UserSettings {
  user_id: string;
  notifications: NotificationSettings;
  security: SecuritySettings;
  display: DisplaySettings;
}

export interface NotificationSettings {
  email: {
    investment_updates: boolean;
    market_alerts: boolean;
    new_products: boolean;
    maturity_reminders: boolean;
    newsletters: boolean;
  };
  push: {
    investment_updates: boolean;
    market_alerts: boolean;
    new_products: boolean;
    maturity_reminders: boolean;
  };
  sms: {
    investment_updates: boolean;
    market_alerts: boolean;
    maturity_reminders: boolean;
  };
  frequency: 'realtime' | 'daily' | 'weekly';
}

export interface SecuritySettings {
  two_factor_enabled: boolean;
  login_notifications: boolean;
  unusual_activity_alerts: boolean;
  session_timeout: boolean;
  device_management: boolean;
}

export interface DisplaySettings {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: string;
  timezone: string;
}
