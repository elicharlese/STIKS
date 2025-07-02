import dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: parseInt(process.env.PORT || '3001', 10),
    env: process.env.NODE_ENV || 'development',
    cors: {
      origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
      credentials: true,
    },
  },
  database: {
    supabase: {
      url: process.env.SUPABASE_URL!,
      anonKey: process.env.SUPABASE_ANON_KEY!,
      serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    },
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET!,
      expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    },
    bcrypt: {
      rounds: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),
    },
  },
  blockchain: {
    solana: {
      rpcUrl: process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
      cluster: process.env.SOLANA_CLUSTER as 'mainnet-beta' | 'testnet' | 'devnet' || 'mainnet-beta',
      privateKey: process.env.SOLANA_PRIVATE_KEY,
    },
  },
  external: {
    coinbase: {
      apiKey: process.env.COINBASE_API_KEY,
      apiSecret: process.env.COINBASE_API_SECRET,
    },
    coingecko: {
      apiKey: process.env.COINGECKO_API_KEY,
    },
  },
  cache: {
    redis: {
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    },
  },
  email: {
    service: process.env.EMAIL_SERVICE || 'smtp',
    smtp: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  security: {
    rateLimit: {
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
      maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
    },
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'combined',
  },
  webhooks: {
    stripe: {
      secret: process.env.STRIPE_WEBHOOK_SECRET,
    },
    solana: {
      secret: process.env.SOLANA_WEBHOOK_SECRET,
    },
  },
};

// Validate required environment variables
const requiredEnvVars = [
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'JWT_SECRET',
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
