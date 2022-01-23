const axios = require('axios')
const config = require('../config/index');

sendMessageWhatsApp = async (payloadTemplate, configHeadersNofitication) => {



  const resultPostBroadCast = await axios.post(`${config.brota.notification}`, payloadTemplate, configHeadersNofitication);

  if (resultPostBroadCast.status === 200) {

    return { "status": 200, "message": "Broadcast enviado com sucesso!" };

  } else {

    return { "status": 400, "message": "Erro ao enviar mensagem!" };
  }


}

module.exports = {
  sendMessageWhatsApp
}