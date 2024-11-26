// config/system/database.js
require('dotenv').config();

/**
 * @typedef {Object} DatabaseConfig
 * @property {string} host - Database host
 * @property {number} port - Database port
 * @property {string} username - Database username
 * @property {string} password - Database password
 * @property {string} database - Database name
 * @property {string} dialect - Database type
 * @property {boolean} logging - Enable/disable query logging
 */

/** @type {DatabaseConfig} */
const databaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'default_user',
  password: process.env.DB_PASS || 'default_pass',
  database: process.env.DB_NAME || 'default_db',
  dialect: 'postgres',
  logging: false,
};

module.exports = databaseConfig;
