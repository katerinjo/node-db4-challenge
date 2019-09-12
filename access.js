const db = require('./dbConfig');

function getRecipes() {
  return db('recipes')
    .select('name');
}

function getShoppingList(recipeID) {
  return db('recipes as r')
    .where({ 'r.id': recipeID })
    .join('recipes-ingredients as ri', 'ri.recipe', 'r.id')
    .join('ingredients as i', 'ri.ingredient', 'i.id')
    .select('i.name', 'ri.quantity', 'ri.unit');
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