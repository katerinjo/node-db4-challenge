exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      name: 'chips'
    },
    {
      name: 'cheese'
    },
    {
      name: 'peanut butter'
    },
    {
      name: 'jelly'
    },
    {
      name: 'bread'
    },
    {
      name: 'soylent'
    },
    {
      name: 'waffles'
    },
    {
      name: 'syrup'
    }
  ]);
};