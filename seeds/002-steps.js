
exports.seed = function(knex) {
  return knex('steps').insert([
    {
      recipe: 1,
      ordinal: 1,
      body: 'add chips'
    },
    {
      recipe: 1,
      ordinal: 2,
      body: 'add cheese'
    },
    {
      recipe: 1,
      ordinal: 3,
      body: 'microwave'
    },
    {
      recipe: 2,
      ordinal: 1,
      body: 'put peanut butter on bread'
    },
    {
      recipe: 2,
      ordinal: 2,
      body: 'put jelly on bread'
    },
    {
      recipe: 3,
      ordinal: 1,
      body: 'open the bottle'
    },
    {
      recipe: 4,
      ordinal: 1,
      body: 'toast waffles'
    },
    {
      recipe: 4,
      ordinal: 2,
      body: 'spread peanut butter'
    },
    {
      recipe: 4,
      ordinal: 3,
      body: 'add syrup'
    }
  ]);
};
