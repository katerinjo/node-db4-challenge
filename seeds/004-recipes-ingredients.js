
exports.seed = function(knex) {
  return knex('recipes-ingredients').insert([
    {
      recipe: 1,
      ingredient: 1,
      quantity: 1,
      unit: 'handful'
    },
    {
      recipe: 1,
      ingredient: 2,
      quantity: 1,
      unit: 'whatever'
    },
    {
      recipe: 2,
      ingredient: 3,
      quantity: 1,
      unit: 'whatever'
    },
    {
      recipe: 2,
      ingredient: 4,
      quantity: 1,
      unit: 'whatever'
    },
    {
      recipe: 2,
      ingredient: 5,
      quantity: 2,
      unit: 'slices'
    },
    {
      recipe: 3,
      ingredient: 6,
      quantity: 1,
      unit: 'bottle'
    },
    {
      recipe: 4,
      ingredient: 7,
      quantity: 2,
      unit: 'items'
    },
    {
      recipe: 4,
      ingredient: 3,
      quantity: 1,
      unit: 'whatever'
    },
    {
      recipe: 4,
      ingredient: 8,
      quantity: 1,
      unit: 'whatever'
    },
  ]);
};
