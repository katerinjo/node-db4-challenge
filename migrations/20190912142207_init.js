
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 32).notNullable();
    })
    .createTable('steps', tbl => {
      tbl.integer('recipe').unsigned().notNullable();
      tbl.integer('ordinal').unsigned().notNullable();
      tbl.string('body', 512).notNullable();
      tbl.primary(['recipe', 'ordinal']);
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
    })
    .createTable('recipe-ingredients', tbl => {
      tbl.increments()
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('recipes')
    .dropTable('steps')
    .dropTable('ingredients')
    .dropTable('recipe-ingredients');
};
