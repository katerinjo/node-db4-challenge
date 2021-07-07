
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      name: 'nachos'
    },
    {
      name: 'pb&j'
    },
    {
      name: 'soylent'
    },
    {
      name: 'peanut butter waffles'
    }
  ]);
};
