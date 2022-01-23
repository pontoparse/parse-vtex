const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

getResourceServices = async (phone) => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip;
 
  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id":uuid(),
    "method": "get",
    "uri": `/resources/${phone}`
    }, config.configHeaders);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao consultar resource" };

  }



}

module.exports = {
  getResourceServices
}