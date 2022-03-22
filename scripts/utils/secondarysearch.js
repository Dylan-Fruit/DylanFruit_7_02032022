// Recherche d'ingrédients exact dans la liste de recette
function findIngredients(recipe, listText) {
    if(recipe.ingredients.find((ingre) => ingre.ingredient.toLocaleLowerCase().includes(listText.toLocaleLowerCase()) && ingre.ingredient.length === listText.length))
      return true;
    return false;
  }
  
// Recherche d'ingrédients via l'input principal 
function findOpenedIngredients(recipe, listText) {
  if(recipe.ingredients.find((ingre) => ingre.ingredient.toLocaleLowerCase().includes(listText.toLocaleLowerCase())))
    return true;
  return false;
}

// Recherche d'ustensiles exact dans la liste de recette
function findUstensils(recipe, input) {
  if (recipe.ustensils.find((usten) => usten.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && usten.length === input.length))
    return true;
  return false;
}
  
// Création de tableaux pour contenir les données reçues
const inputContainer = [];
const ingredientContainer = [];
const applianceContainer = [];
const ustensilContainer = [];
const recipeContainer = [];
  
export { inputContainer, ingredientContainer, applianceContainer, ustensilContainer, recipeContainer, findIngredients, findOpenedIngredients, findUstensils };
  