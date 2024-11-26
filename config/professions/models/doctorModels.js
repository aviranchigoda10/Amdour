/**
 * @typedef {Object} Model
 * @property {string} name - Model name
 * @property {string} version - Model version
 * @property {string} description - Model description
 */

/**
 * @typedef {Object} ModelConfig
 * @property {Model[]} models - List of models
 */

/** @type {ModelConfig} */
const doctorModels = {
  models: [
    {
      name: 'diagnosisModelV1',
      version: '1.0',
      description: 'Model for diagnosing patient conditions.'
    },
    {
      name: 'medicalRecordsModelV2',
      version: '2.0',
      description: 'Model for handling patient medical records.'
    }
  ]
};

module.exports = doctorModels;
