const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

getResourceAll = async () => {

  config.configHeaders.headers['Authorization'] = config.headers.authBlip2;

  const resultTracking = await axios.post(`${config.brota.commands}`, {
    "id": uuid(),
    "method": "get",
    "uri": "/resources?$take=100000"
    }, config.configHeaders);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao pegar resource" };

  }



}

module.exports = {
  getResourceAll
}