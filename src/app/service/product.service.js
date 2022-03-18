const db = require('../database/connection')

exports.create = async ({ description_product, val_product, image_product }) => {

  const newProduct = await db.insert({ description_product, val_product, image_product }).into('tb_products')

  return newProduct
}

exports.findAll = async () => {

  const allProducts = await db.select('*').from('tb_products')

  return allProducts
}