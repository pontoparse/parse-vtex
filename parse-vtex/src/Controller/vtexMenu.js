const axios = require('axios')
const config = require('../config/index');
const services = require('../Services/index');
const adapters = require('../Adapter/index');

vtexMenu = async (req, res) => {

   const documento = req.query.doc;
   const { accountname, environment, appkey, apptoken}= req.headers;



  try {

  
   const bodyListOrders = await services.getListOrders.getListOrders(accountname, environment, documento, apptoken, appkey)

   const resultOrders =  await adapters.transformToMenu.transformToMenu(bodyListOrders.data.list)

   res.status(200).json(resultOrders);
   
  } catch (e) {
    return { "status": 400, "message": "Erro ao acesso o recurso" };
  }

}




module.exports = {
  vtexMenu
}