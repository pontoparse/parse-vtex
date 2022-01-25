const config = require('../config/index');


function formatMoney(n, c, d, t) {
  c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
  return "R$ " + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}



transformToDetails = async (bodyOrderDetails) => {


  try {


    const order = bodyOrderDetails;

    let paymentsValue = order.paymentData.transactions[0].payments[0].value.toString();
    const statusDescription = order.statusDescription;

    const num1 = paymentsValue.substr(0, paymentsValue.length - 2);
    const num2 = paymentsValue.substr(paymentsValue.length - 2);
    const productValue = formatMoney(`${num1}.${num2}`);
    let text = 'Sobre o pedido informado, localizei as seguintes informações<br><br>'

    order.items.forEach((i, index) => {

      const idx = index + 1

        text +=`<b>Produto-${idx}:</b> ${i.name}<br>` 
    })

     text += `<b>Status:</b> ${statusDescription}<br><b>Valor:</b> ${productValue}`;

    return text;


} catch (e) {

    return e;

}

}



module.exports = {
  transformToDetails
}