import displayList from "./utils/displayList.js";
import search from "./utils/search.js";
import recipes from "./data/recipe.js";
import listAndTags from "./factory/listandtags.js";
import recipeFactory from "./factory/recipeFactory.js";

function init() {
    displayList();

    listAndTags(recipes);

    recipes.forEach((recipe) => recipeFactory(recipe));
}

init();

search(recipes);