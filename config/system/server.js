require('dotenv').config();

/**
 * @typedef {Object} ServerConfig
 * @property {number} port - Server port
 * @property {string} environment - Node environment
 * @property {string} apiVersion - API version
 * @property {string[]} allowedOrigins - CORS allowed origins
 */

/** @type {ServerConfig} */
const serverConfig = {
  port: parseInt(process.env.SERVER_PORT || '3000', 10),
  environment: process.env.NODE_ENV || 'development',
  apiVersion: 'v1',
  allowedOrigins: process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : ['*'],
};

module.exports = serverConfig;
