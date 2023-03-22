import recipeFactory from "../factory/recipeFactory.js";
import recipes from "../data/recipe.js";
import { resetLists, updateLists } from "./listParam.js";
import {
  inputContainer,
  ingredientContainer,
  applianceContainer,
  ustensilContainer,
  recipeContainer,
  findIngredients,
  findOpenedIngredients,
  findUstensils,
} from "./secondarysearch.js";
import addEventListener from "./eventListeners.js";

export default function search(recipe) {
  function pushAllRecipeFind() {
    const mainSearch = document.getElementById("research");
    const input = mainSearch.value;

    // Condition pour vérifier le nombre de caractères tapés dans l'input & recherche de recettes correspondantes avec fonction filter
    if (input.length >= 3) {
      inputContainer.push(input);

      let totalResult = [];

      totalResult = recipe.filter(
        (recipe) =>
          recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
          findOpenedIngredients(recipe, input) ||
          recipe.description
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase())
      );
      let uniqueResult = [];
      uniqueResult = [...new Set(totalResult)];

      recipeContainer.push(uniqueResult);
    }

    // fonction de filtre liée à l'affichage des tags
    ingredientContainer.forEach((ingre) => {
      const allRecipeByIngre = recipe.filter((recipe) =>
        findIngredients(recipe, ingre)
      );
      recipeContainer.push(allRecipeByIngre);
    });

    applianceContainer.forEach((appli) => {
      const allRecipeByAppli = recipe.filter(
        (recipe) =>
          recipe.appliance
            .toLocaleLowerCase()
            .includes(appli.toLocaleLowerCase()) &&
          recipe.appliance.length === appli.length
      );
      recipeContainer.push(allRecipeByAppli);
    });

    ustensilContainer.forEach((usten) => {
      const allRecipeByUsten = recipe.filter((recipe) =>
        findUstensils(recipe, usten)
      );
      recipeContainer.push(allRecipeByUsten);
    });

    // variable result qui se met à jout en fonction de la recherche via l'input principal et les inputs des combobox
    let result = [];
    if (
      (inputContainer.length !== 0 && input.length >= 3) ||
      ingredientContainer.length !== 0 ||
      applianceContainer.length !== 0 ||
      ustensilContainer.length !== 0
    ) {
      result = recipeContainer
        .shift()
        .filter((a) => recipeContainer.every((b) => b.indexOf(a) !== -1));
    }

    resetLists();

    result.forEach((item) => {
      updateLists(item);
    });

    // Affichage des recettes correspondantes à la recherche dans l'input princpal
    const recipeSection = document.querySelector(".displayrecipe");
    recipeSection.innerHTML = "";

    result.forEach((item) => {
      recipeFactory(item);
    });

    // Appel des fonctions resetLists et updateLists pour reset et mettre à jour les listes des combox en fonction de la recherche + reset de la liste de recette en fermant un tag
    if (
      input.length <= 2 &&
      ingredientContainer.length === 0 &&
      applianceContainer.length === 0 &&
      ustensilContainer.length === 0
    ) {
      resetLists();
      recipe.forEach((item) => {
        updateLists(item);
      });
      recipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
    }

    // Affichage du message "no-result" si la recherche dans l'input principal est supérieur ou égal à 3 est mauvaise
    const noResult = document.querySelector(".no-result");
    if (
      (input.length >= 3 && result.length === 0) ||
      (result.length === 0 &&
        (ingredientContainer.length !== 0 ||
          applianceContainer.length !== 0 ||
          ustensilContainer.length !== 0))
    ) {
      noResult.style.display = "block";
    } else {
      noResult.style.display = "none";
    }
  }
  addEventListener(pushAllRecipeFind);
}
