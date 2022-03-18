const db = require('../database/connection')

exports.create = async ({ idCustomer }) => {

  const newOrder = await db.insert({ fk_id_customer: idCustomer }).into('tb_orders')

  return newOrder
}

