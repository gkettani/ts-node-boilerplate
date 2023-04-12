import winston from 'winston';
import Transport from 'winston-transport';

/**
 * Log format
 */
const logFormat = winston.format.printf(
  ({ level, message, timestamp }) => `${level}: ${timestamp}  ${message}`,
);

/**
 * Logger configuration
 * @param env - Node environment (development, production, test)
 * @returns winston logger
 */
export function Logger(env = 'development', logDir = 'logs') {
  const level = env === 'development' ? 'debug' : 'info';

  const transports: Transport[] = [];

  const formatParams = [winston.format.timestamp({ format: 'HH:mm:ss' }), logFormat];

  if (env === 'production') {
    transports.push(new winston.transports.File({ filename: `${logDir}/combined.log` }));
    transports.push(new winston.transports.File({ filename: `${logDir}/error.log`, level: 'error' }));
  } else {
    formatParams.push(winston.format.colorize());
    transports.push(new winston.transports.Console());
  }
  const format = winston.format.combine(...formatParams);

  return winston.createLogger({
    level,
    format,
    transports,
  });
}

/**
 * Default logger instance
 * Print to console
 */
export const logger = Logger();
