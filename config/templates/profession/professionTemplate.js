/**
 * @typedef {Object} ProfessionTemplate
 * @property {string} professionName - Name of the profession
 * @property {string[]} allowedActions - List of allowed actions
 * @property {string[]} complianceRequirements - List of compliance requirements
 * @property {string[]} modelMappings - List of associated models
 */

/** @type {ProfessionTemplate} */
const professionTemplate = {
  professionName: '[Profession Name]',
  allowedActions: [
    '[action1]',
    '[action2]',
    '[action3]'
  ],
  complianceRequirements: [
    '[Regulation1]',
    '[Regulation2]'
  ],
  modelMappings: [
    '[modelNameV1]',
    '[modelNameV2]'
  ]
};

module.exports = professionTemplate;
