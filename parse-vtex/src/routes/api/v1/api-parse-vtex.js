const express = require('express');
const routes = express.Router();


const vtexMenu = require('../../../Controller/vtexMenu');
const vtexDetails = require('../../../Controller/vtexDetails');



routes.get('/integration/menu', vtexMenu.vtexMenu);
routes.get('/integration/details/:id', vtexDetails.vtexDetails);
module.exports = routes;