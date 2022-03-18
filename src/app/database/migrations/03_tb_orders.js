exports.up = function (knex) {
  return knex.schema.createTable('tb_orders', function (table) {
    table.increments('id_order').notNullable();
    table.string('status_order', 1).notNullable().defaultTo('P');
    table.datetime('dt_order_crated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.integer('fk_id_customer').unsigned().notNullable();

    table.foreign('fk_id_customer').references('id_customer').inTable('tb_customers');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_orders")
};


