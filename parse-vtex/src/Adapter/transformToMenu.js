const config = require('../config/index');

transformToMenu = async (bodyOrders) => {


  try {

    const order = bodyOrders;
    
    const items = order.map((i, index) => {

      const idx = index + 1
      return { "order": idx, "text": `${i.orderId} - ${i.creationDate.split('T')[0].split('-').reverse().join('/')}` }
    })

    const menu = {
      tipo: 'application/vnd.lime.select+json',
      body: {
        "text": `Olha, encontrei alguns pedidos vinculados ao seu <b>CPF<b/>, para ver o detalhes, basta selecionar um pedido`,
        "options": items.filter(e => e.order <= 3)
      }
    }

    console.log(menu)
    return menu;


  } catch (e) {

    return e;

  }

}


module.exports = {
  transformToMenu
}