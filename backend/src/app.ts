import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { config } from '@/config';
import { logger } from '@/utils/logger';
import { errorHandler, notFoundHandler } from '@/middleware/errorHandler';
import { rateLimiter } from '@/middleware/rateLimiter';

// Import routes
import authRoutes from '@/routes/auth';
import userRoutes from '@/routes/user';
import productRoutes from '@/routes/products';
import portfolioRoutes from '@/routes/portfolio';
import analyticsRoutes from '@/routes/analytics';
import blockchainRoutes from '@/routes/blockchain';
import governanceRoutes from '@/routes/governance';
import marketRoutes from '@/routes/market';

const app = express();

// Basic middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors(config.server.cors));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
if (config.server.env !== 'test') {
  app.use(morgan(config.logging.format, {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  }));
}

// Rate limiting
app.use(rateLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      env: config.server.env,
    },
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/governance', governanceRoutes);
app.use('/api/market', marketRoutes);

// API documentation
if (config.server.env !== 'production') {
  const swaggerSpec = require('@/docs/swagger');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
