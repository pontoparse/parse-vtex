const axios = require('axios')
const config = require('../config/index');

getOrdersDetails = async (orderId, accountName, environment, appKey, appToken) => {

  config.configHeaders.headers['X-VTEX-API-AppToken'] = appToken;
  config.configHeaders.headers['X-VTEX-API-AppKey'] = appKey;



  const ordersDetails = await axios.get(`https://${accountName}.${environment}.com.br/api/oms/pvt/orders/${orderId}`, config.configHeaders);


  if (ordersDetails.status === 200) {

    return ordersDetails.data;

  } else {

    return { "status": 400, "message": "Erro ao consultar o pedido" };

  }



}

module.exports = {
  getOrdersDetails
}