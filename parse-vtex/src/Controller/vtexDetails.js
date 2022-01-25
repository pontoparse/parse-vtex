const axios = require('axios')
const config = require('../config/index');
const services = require('../Services/index');
const adapters = require('../Adapter/index');

vtexDetails = async (req, res) => {

  const orderId = req.params.id;
  const { accountname, environment, appkey, apptoken}= req.headers;



  try {

  const bodyOrderDetails = await services.getOrdersDetails.getOrdersDetails(orderId, accountname, environment, appkey, apptoken)

  const resultDetails =  await adapters.transformToDetails.transformToDetails(bodyOrderDetails)

   res.send(resultDetails);
   
  } catch (e) {
    return { "status": 400, "message": "Erro ao acesso o recurso" };
  }

}


module.exports = {
  vtexDetails
}