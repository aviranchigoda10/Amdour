/**
 * @typedef {Object} Action
 * @property {string} name - Action name
 * @property {string} description - Action description
 */

/**
 * @typedef {Object} ActionConfig
 * @property {Action[]} actions - List of actions
 */

/** @type {ActionConfig} */
const doctorActions = {
  actions: [
    {
      name: 'diagnosePatient',
      description: 'Diagnose patient based on symptoms and medical history.'
    },
    {
      name: 'prescribeMedication',
      description: 'Prescribe appropriate medication to patients.'
    },
    {
      name: 'orderMedicalTests',
      description: 'Order necessary medical tests for diagnosis.'
    },
    {
      name: 'provideConsultation',
      description: 'Provide medical consultation and advice.'
    }
  ]
};

module.exports = doctorActions;
