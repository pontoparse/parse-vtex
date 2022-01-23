const axios = require('axios')
const config = require('../config/index');
const {uuid} = require('../utils/index');

setTrackingEvent = async (category, action) => {

  config.configHeadersBlip.headers['Authorization'] = config.headers.authBlip2;
 
  const resultTracking = await axios.post(`${config.brota.commands}`, {

    "id": uuid(),
    "to": "postmaster@analytics.msging.net",
    "method": "set",
    "type": "application/vnd.iris.eventTrack+json",
    "uri": "/event-track",
    "resource": {
      "category":category,
      "action": action
    }
  }, config.configHeadersBlip);


  if (resultTracking.status) {

    return resultTracking;

  } else {

    return { "status": 400, "message": "Erro ao consultar resource" };

  }



}

module.exports = {
  setTrackingEvent
}