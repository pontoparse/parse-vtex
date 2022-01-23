const config = require('../config/index');

templateAdapters = async (phone, additionalProp1, additionalProp2, template) => {



  config.payloadTemplate.telephone = phone;
  config.payloadTemplate.params['additionalProp1'] = additionalProp1;
  config.payloadTemplate.params['additionalProp2'] = additionalProp2;
  config.payloadTemplate.template = template;

  return config.payloadTemplate;

}

module.exports = {
  templateAdapters
}