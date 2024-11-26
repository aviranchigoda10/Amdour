const databaseConfig = require('./system/database');
const serverConfig = require('./system/server');
const logger = require('./system/logger');
const doctorDefinition = require('./professions/definitions/doctor');
const doctorActions = require('./professions/actions/doctorActions');
const doctorModels = require('./professions/models/doctorModels');
const doctorCompliance = require('./professions/compliance/doctorCompliance');
const professionTemplate = require('./templates/professionTemplate');

/**
 * @typedef {Object} Config
 * @property {Object} system - System configurations
 * @property {Object} professions - Profession-specific configurations
 * @property {Object} templates - Configuration templates
 */

/** @type {Config} */
const config = {
  system: {
    database: databaseConfig,
    server: serverConfig,
    logger
  },
  professions: {
    doctor: {
      definition: doctorDefinition,
      actions: doctorActions,
      models: doctorModels,
      compliance: doctorCompliance
    }
    // Add more professions as needed
  },
  templates: {
    profession: professionTemplate
  }
};

module.exports = config;