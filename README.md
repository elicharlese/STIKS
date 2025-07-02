# STIKS Backend Documentation

## Overview

STIKS is a decentralized platform for cryptocurrency Collateralized Debt Obligations (CDOs) and innovative financial products. The backend architecture consists of:

- **Next.js API Routes**: RESTful API endpoints for frontend communication
- **Supabase**: PostgreSQL database with real-time capabilities and authentication
- **Rust Microservice**: Solana blockchain integration service
- **TypeScript**: End-to-end type safety

## Architecture

```
Frontend (Next.js) → API Routes → Supabase Database
                            ↓
                    Rust Service → Solana Blockchain
```

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+
- Rust 1.75+
- PostgreSQL 15+ (or Supabase account)
- Solana CLI (for blockchain integration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elicharlese/STIKS.git
cd STIKS
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Set up Supabase:
```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase (if not using hosted)
supabase start

# Run migrations
supabase db push
```

5. Build and run Rust service:
```bash
cd backend/rust-service
cp .env.example .env
# Edit .env with your configuration
cargo build --release
cargo run
```

6. Start the development server:
```bash
pnpm dev
```

## API Documentation

### Authentication

All authenticated endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Base URL

Development: `http://localhost:3000/api`
Production: `https://your-domain.vercel.app/api`

### Response Format

All API responses follow this format:

```json
{
  "success": boolean,
  "data": any | null,
  "error": {
    "code": string,
    "message": string,
    "details": any
  } | null,
  "pagination": {
    "page": number,
    "limit": number,
    "total": number,
    "has_more": boolean
  } | null
}
```

### Endpoints

#### Products

**GET /api/products**
Get list of available investment products.

Query Parameters:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20, max: 100)
- `type` (string): Filter by product type
- `risk_level` (string): Filter by risk level
- `status` (string): Filter by status (default: active)

**GET /api/products/[id]**
Get specific product details.

#### Investments

**POST /api/investments**
Create a new investment (requires authentication).

Request Body:
```json
{
  "product_id": "uuid",
  "amount": number,
  "portfolio_id": "uuid" // optional
}
```

**GET /api/investments**
Get user's investments (requires authentication).

Query Parameters:
- `page`, `limit`: Pagination
- `status`: Filter by status
- `portfolio_id`: Filter by portfolio

#### Portfolios

**POST /api/portfolios**
Create a new portfolio (requires authentication).

**GET /api/portfolios**
Get user's portfolios with summary (requires authentication).

#### Analytics

**GET /api/analytics**
Get user's analytics data (requires authentication).

Query Parameters:
- `portfolio_id`: Filter by specific portfolio
- `start_date`, `end_date`: Date range filter
- `granularity`: daily, weekly, monthly

#### Market Data

**GET /api/market**
Get current market data for cryptocurrencies.

Query Parameters:
- `symbols`: Comma-separated list of symbols
- `limit`: Number of results (max: 100)

#### Authentication

**POST /api/auth/connect**
Connect wallet and create/update user profile.

Request Body:
```json
{
  "wallet_address": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "bio": "string",
  "risk_tolerance": "conservative" | "moderate" | "aggressive"
}
```

### Error Codes

- `UNAUTHORIZED`: Authentication required or invalid
- `FORBIDDEN`: Access denied
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid request data
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INSUFFICIENT_FUNDS`: Not enough balance
- `PRODUCT_NOT_AVAILABLE`: Product unavailable
- `INTERNAL_ERROR`: Server error

## Database Schema

### Key Tables

#### users
Extends Supabase auth.users with additional profile information.

#### products
Investment products (CDOs, STIK PAKs) with metadata.

#### investments
User investments with status tracking.

#### portfolios
User portfolio organization.

#### transactions
Transaction history and audit trail.

#### analytics
Historical performance data.

#### market_data
Cryptocurrency market data cache.

### Row Level Security (RLS)

All tables implement RLS policies to ensure data isolation:
- Users can only access their own data
- Products are publicly readable when active
- Admin roles have elevated permissions

## Rust Service

The Rust microservice handles Solana blockchain operations:

### Endpoints

**GET /health**
Service health check.

**GET /api/v1/wallet/balance/:address**
Get wallet SOL and token balances.

**POST /api/v1/transaction/send**
Send transactions on Solana.

**POST /api/v1/product/mint**
Mint new product tokens.

**POST /api/v1/investment/create**
Create investment NFTs.

### Configuration

Environment variables for Rust service:

```env
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
SOLANA_PRIVATE_KEY=base58_encoded_private_key
STIKS_PROGRAM_ID=your_program_public_key
API_KEY=service_authentication_key
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables

Required environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Database
DATABASE_URL=
DIRECT_URL=

# JWT
JWT_SECRET=
JWT_EXPIRATION=7d

# Solana
SOLANA_RPC_URL=
SOLANA_CLUSTER=
SOLANA_PRIVATE_KEY=

# Services
RUST_SERVICE_URL=
RUST_SERVICE_API_KEY=

# External APIs
COINBASE_API_KEY=
COINGECKO_API_KEY=

# Security
RATE_LIMIT_MAX=100
CORS_ORIGIN=

# Monitoring
LOG_LEVEL=info
SENTRY_DSN=

# Email
RESEND_API_KEY=
FROM_EMAIL=
```

## Testing

Run tests:
```bash
# Unit and integration tests
pnpm test

# API tests specifically
pnpm test:api

# Watch mode
pnpm test:watch

# Coverage
pnpm test --coverage
```

## Development Workflow

1. Create feature branch from `main`
2. Make changes with tests
3. Run `pnpm lint` and `pnpm type-check`
4. Submit pull request
5. Automated CI/CD runs tests
6. Merge to `main` triggers deployment

## Performance Optimization

### Database
- Use indexes for frequently queried fields
- Implement connection pooling
- Cache frequently accessed data
- Use read replicas for analytics

### API
- Implement pagination for large datasets
- Use HTTP caching headers
- Compress responses
- Rate limiting per user/IP

### Frontend
- Implement SWR/React Query for data fetching
- Use Next.js Image optimization
- Lazy load components
- Service worker for offline capability

## Monitoring

### Health Checks
- Database connectivity
- External service availability
- Rust service status

### Metrics
- API response times
- Error rates
- User activity
- Transaction volume

### Alerts
- Service downtime
- High error rates
- Unusual activity patterns
- Performance degradation

## Security

### Authentication
- JWT tokens with refresh rotation
- Wallet-based authentication
- Session management

### Authorization
- Role-based access control
- Row-level security policies
- API key authentication for services

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CORS configuration

### Blockchain Security
- Transaction validation
- Replay attack prevention
- Secure key management
- Multi-signature support

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## Support

For support and questions:
- GitHub Issues: Bug reports and feature requests
- Documentation: This README and inline code comments
- API Docs: OpenAPI specification at `/api/docs`
