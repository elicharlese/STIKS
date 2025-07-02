// Simple logger for development
// In production, use winston or similar

export interface LogLevel {
  ERROR: 'error'
  WARN: 'warn'
  INFO: 'info'
  DEBUG: 'debug'
}

const LOG_LEVEL = process.env.LOG_LEVEL || 'info'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

class Logger {
  private shouldLog(level: string): boolean {
    const levels = ['error', 'warn', 'info', 'debug']
    const currentLevelIndex = levels.indexOf(LOG_LEVEL)
    const messageLevel = levels.indexOf(level)
    
    return messageLevel <= currentLevelIndex
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString()
    const logEntry = {
      timestamp,
      level: level.toUpperCase(),
      message,
      ...(data && { data }),
    }
    
    return IS_PRODUCTION ? JSON.stringify(logEntry) : 
           `[${timestamp}] ${level.toUpperCase()}: ${message}${data ? ` ${JSON.stringify(data)}` : ''}`
  }

  error(message: string, data?: any): void {
    if (this.shouldLog('error')) {
      console.error(this.formatMessage('error', message, data))
    }
  }

  warn(message: string, data?: any): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('warn', message, data))
    }
  }

  info(message: string, data?: any): void {
    if (this.shouldLog('info')) {
      console.info(this.formatMessage('info', message, data))
    }
  }

  debug(message: string, data?: any): void {
    if (this.shouldLog('debug')) {
      console.debug(this.formatMessage('debug', message, data))
    }
  }
}

export const logger = new Logger()
