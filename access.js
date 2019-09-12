const db = require('./dbConfig');

function getRecipes() {
  return db('recipes')
    .select();
}

function getShoppingList(recipeID) {
  return db('recipes as r')
    .join('ingredients as i', 'i.recipe', 'r.id')
    .select('i.name');
}

function getInstructions(recipeID) {
  return db('steps')
    .where({ recipe: recipeID})
    .select('body')
    .orderBy('ordinal');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};