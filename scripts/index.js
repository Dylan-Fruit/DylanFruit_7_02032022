import displayList from "./utils/displayList.js";
import recipes from "./data/recipe.js";
import recipeFactory from "./factory/recipeFactory.js";
import mainSearch from "./utils/search.js";
import listAndTags from "./factory/listandtags.js";

function init() {
    displayList();

    listAndTags(recipes);

    recipes.forEach((recipe) => recipeFactory(recipe));

}

init();

mainSearch(recipes);