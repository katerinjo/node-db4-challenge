
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 32).notNullable();
    })
    .createTable('steps', tbl => {
      tbl.integer('recipe')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .notNullable();
      tbl.integer('ordinal').unsigned().notNullable();
      tbl.string('body', 512).notNullable();
      tbl.primary(['recipe', 'ordinal']);
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 32).unique().notNullable();
    })
    .createTable('recipes-ingredients', tbl => {
      tbl
        .integer('recipe')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .notNullable();
      tbl
        .integer('ingredient')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .notNullable();
      tbl.float('quantity').unsigned().notNullable();
      tbl.string('unit', 16);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe-ingredients');
};
