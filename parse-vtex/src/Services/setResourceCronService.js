const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

setResourceCronService = async (orderId, payload) => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip2;

  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id":uuid(),
    "method": "set",
    "uri":  encodeURI("/resources/"+ orderId),
    "type": 'application/json',
    "resource": payload

  }, config.configHeaders);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao gravar em resource" };

  }



}

module.exports = {
  setResourceCronService
}