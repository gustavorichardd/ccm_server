
const OrderService = require('../service/order.service')
const OrderItemService = require('../service/order-item.service')

const vendaData = {
  name: 'Gustavo',
  idCustomer: 1,
  products: [
    {
      idProduct: 1,
      descProduct: 'Café',
      amountProduct: 3,
      valProduct: 5.4,
      obsProduct: 'Leite frio'
    },
    {
      idProduct: 2,
      descProduct: 'Chá',
      amountProduct: 1,
      valProduct: 7.0,
      obsProduct: 'Sem observações'
    },
  ]
}


exports.store = async (request, response) => {
  const { name, idCustomer, products } = request.body

  const newOrderId = await OrderService.create({ idCustomer });

  const orderItems = await OrderItemService.create({ newOrderId, products })


  response.status(200).json({ newOrderId, orderItems })

  // response.json('ok')
}

