exports.up = function (knex) {
  return knex.schema.createTable('tb_customers', function (table) {
    table.increments('id_customer').notNullable();
    table.string('name_customer', 255).notNullable();
    table.string('token_customer', 255).notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_customers")
};
