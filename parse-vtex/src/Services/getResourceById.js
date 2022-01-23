const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

getResourceById = async (orderId) => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip2;
 
  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id":uuid(),
    "method": "get",
    "uri": `/resources/${orderId}`
    }, config.configHeaders);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao consultar resource" };

  }



}

module.exports = {
  getResourceById
}