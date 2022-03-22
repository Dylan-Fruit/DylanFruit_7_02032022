import displayList from "./utils/displayList.js";
import search from "./utils/search.js";
import recipes from "./data/recipe.js";
import listAndTags from "./factory/listandtags.js";
import recipeFactory from "./factory/recipeFactory.js";

function init() {
    // Appel de la fonction d'affichage des listes au clic sur le chevron
    displayList();

    // Appel de la fonction d'affichage des listes de tags 
    listAndTags(recipes);

    // Appel de la fonction d'affichage des recettes 
    recipes.forEach((recipe) => recipeFactory(recipe));
}

init();

// Appel de la fonction de recherche 
search(recipes);