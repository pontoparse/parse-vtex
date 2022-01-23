const axios = require('axios')
const config = require('../config/index');
const services = require('../Services/index');
const adapters = require('../Adapter/index');

Customer = async (req, res) => {

  const document = req.query.doc;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');

    if (parts.length == 2) {
        var scheme = parts[0],
            credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
            token = credentials;
        }
    } else {
        return res.status(401).json({message: 'Você não possui acesso ao recurso solicitado'});
    }
  } else {
    return res.status(401).json({message: 'Você precisa passar um Header e um token'});
  }

  try {

    if (document === '06697478071') {

      const client = {
        "data": [
          {
            "type": "customer",
            "id": "1990",
            "attributes": {
              "name": ".Parse",
              "email": "pontoparse@gmail.com",
              "document": "066.974.780-71",
              "phone": "(84) 99150-1160"
            }
          }]
      }

      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'cliente não localizado' });
    }

  } catch (e) {
    return { "status": 400, "message": "Erro ao acesso o recurso" };
  }

}


module.exports = {
  Customer
}