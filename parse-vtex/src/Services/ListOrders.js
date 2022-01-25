const axios = require('axios')
const config = require('../config/index');

getListOrders = async (accountName, environment, documento, appToken, appKey) => {

  config.configHeaders.headers['X-VTEX-API-AppToken'] = appToken;
  config.configHeaders.headers['X-VTEX-API-AppKey'] = appKey;


  const listOrders = await axios.get(`https://${accountName}.${environment}.com.br/api/oms/pvt/orders?q=${documento}`, config.configHeaders);


  if (listOrders.status === 200) {

    return listOrders;

  } else {

    return { "status": 400, "message": "Erro ao lista os pedidos" };

  }



}

module.exports = {
  getListOrders
}