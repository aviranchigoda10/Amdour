/**
 * @typedef {Object} ComplianceRequirement
 * @property {string} regulation - Regulation name
 * @property {string[]} requirements - List of compliance requirements
 */

/**
 * @typedef {Object} ComplianceConfig
 * @property {ComplianceRequirement[]} compliance - List of compliance requirements
 */

/** @type {ComplianceConfig} */
const doctorCompliance = {
  compliance: [
    {
      regulation: 'HIPAA',
      requirements: [
        'encryptPatientData',
        'secureCommunicationChannels',
        'accessControl'
      ]
    },
    {
      regulation: 'CDCGuidelines',
      requirements: [
        'followInfectionControlProtocols',
        'reportNotifiableDiseases'
      ]
    }
  ]
};

module.exports = doctorCompliance;