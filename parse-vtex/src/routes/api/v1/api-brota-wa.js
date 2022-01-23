const express = require('express');
const routes = express.Router();

const brota = require('../../../Controller/Principal');
const customer = require('../../../Controller/Customer');
const ordersById = require('../../../Controller/OrdersById');
const orders = require('../../../Controller/Orders');


routes.post('/notification/brota-hook', brota.Principal);
routes.get('/notification/documento', customer.Customer);
routes.get('/notification/orders/:id', ordersById.OrdersById);
routes.get('/notification/orders', orders.Orders);
module.exports = routes;