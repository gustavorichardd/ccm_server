exports.up = function (knex) {
  return knex.schema.createTable('tbx_order_products', function (table) {
    table.increments('id_order_item').notNullable();

    table.integer('fk_id_order').unsigned().notNullable();
    table.integer('fk_id_product').unsigned().notNullable();
    table.integer('amount_product').notNullable();
    table.double('total_value_product').notNullable();
    table.string('obs_order_product', 255).notNullable();

    table.foreign('fk_id_order').references('id_order').inTable('tb_orders');
    table.foreign('fk_id_product').references('id_product').inTable('tb_products');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("tbx_order_products")
};



