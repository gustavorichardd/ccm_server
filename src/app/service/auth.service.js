const db = require("../database/connection")


exports.registerUser = async ({ name, token }) => {
  const newCustomer = await db.insert({ name_customer: name, token_customer: token }).into('tb_customers')
  console.log({ newCustomer })
  return newCustomer
}
exports.validatedUserAlreadyRegistered = async (name_customer) => {
  const validate = await db.select('*').where({ name_customer }).from('tb_customers')
  return validate
}

