require('dotenv').config();
const { createLogger, format, transports } = require('winston');

/**
 * @typedef {Object} LoggerConfig
 * @property {string} level - Logging level
 * @property {Object} format - Log format configuration
 * @property {Object[]} transports - Log transport configurations
 */

/** @type {LoggerConfig} */
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => 
      `[${timestamp}] ${level.toUpperCase()}: ${message}`)
  ),
  transports: [
    new transports.Console(),
    // Add file transport if needed
    // new transports.File({ filename: 'app.log' }),
  ],
});

module.exports = logger;