exports.up = function (knex) {
  return knex.schema.createTable('tb_products', function (table) {
    table.increments('id_product').notNullable();
    table.string('description_product', 255).notNullable();
    table.double('val_product').notNullable();
    table.string('image_product', 255).notNullable();

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_products")
};

