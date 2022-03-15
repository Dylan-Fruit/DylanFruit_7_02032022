const inputContainer = [];
const ingredientContainer = [];
const applianceContainer = []; 
const ustensilContainer = [];
const recipeContainer = [];

function findIngredients(recipe, list){
    if(recipe.ingredients.find((ingred) => ingred.ingredient.toLocaleLowerCase().includes(list.toLocaleLowerCase()) && ingred.ingredient.length === list.length))
    return true;
    return false;
}

function findIngredientsOpen(recipe, list){
    if(recipe.ingredients.find((ingred) => ingred.ingredient.toLocaleLowerCase().includes(list.toLocaleLowerCase())))
    return true;
    return false;
}

function findUstensils(recipe, input){
    if(recipe.ustensils.find((ustens) => ustens.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && ustens.length === input.length))
    return true;
    return false;
}

export{inputContainer, ingredientContainer, applianceContainer, ustensilContainer, recipeContainer, findIngredients, findIngredientsOpen, findUstensils};