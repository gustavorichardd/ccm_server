const db = require('../database/connection')

exports.create = async ({ newOrderId, products }) => {
  let insertedProducts = [];
  for (const { idProduct, amountProduct, valProduct, obsProduct } of products) {
    const addItemToOrderItems = await db.insert({
      fk_id_order: newOrderId,
      fk_id_product: idProduct,
      amount_product: amountProduct,
      total_value_product: amountProduct * valProduct,
      obs_order_product: obsProduct
    }).into('tbx_order_products')
    insertedProducts.push(addItemToOrderItems)
  }
  return {
    insertedProducts
  }
}

