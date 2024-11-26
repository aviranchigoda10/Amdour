/**
 * @typedef {Object} ProfessionDefinition
 * @property {string} professionName - Name of the profession
 * @property {string[]} allowedActions - List of allowed actions
 * @property {string[]} complianceRequirements - List of compliance requirements
 * @property {string[]} modelMappings - List of associated models
 */

/** @type {ProfessionDefinition} */
const doctorDefinition = {
    professionName: 'Doctor',
    allowedActions: [
      'diagnosePatient',
      'prescribeMedication',
      'orderMedicalTests',
      'provideConsultation'
    ],
    complianceRequirements: [
      'HIPAA',
      'CDCGuidelines'
    ],
    modelMappings: [
      'diagnosisModelV1',
      'medicalRecordsModelV2'
    ]
  };
  
  module.exports = doctorDefinition;