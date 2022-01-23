const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

deleteResourceById = async (orderId) => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip2;
 
  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id": uuid(),
    "method": "delete",
    "uri": `/resources/${orderId}`
    }, config.configHeaders);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao consultar resource" };

  }



}

module.exports = {
  deleteResourceById
}