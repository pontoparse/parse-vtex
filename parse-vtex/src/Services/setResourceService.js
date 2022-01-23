const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

setResourceService = async (phone, payload) => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip;

  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id": uuid(),
    "method": "set",
    "uri":  encodeURI("/resources/"+ phone.trim()),
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
  setResourceService
}