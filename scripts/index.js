import recipes from "./data/recipe.js";
import recipeFactory from "./factory/recipeFactory.js";

function init() {
    recipes.forEach((recipe) => recipeFactory(recipe));

}

init();