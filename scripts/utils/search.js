import recipeFactory from "../factory/recipeFactory.js";
import recipes from "../data/recipe.js";
import { resetLists, updateLists } from "./listParam.js";
import { inputContainer, ingredientContainer, applianceContainer, ustensilContainer, recipeContainer, findIngredients, findOpenedIngredients, findUstensils } from "./secondarysearch.js";
import addEventListener from "./eventListeners.js";

export default function search(recipe){
    function pushAllRecipeFind(){
        const mainSearch = document.getElementById("research");
        const input = mainSearch.value;

        if(input.length >= 3) {
            inputContainer.push(input);

            let totalResult = [];

            totalResult = recipe.filter((recipe) => recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || findOpenedIngredients(recipe, input) || recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
            console.log(totalResult);
            let uniqueResult = [];
            uniqueResult = [...new Set(totalResult)];

            recipeContainer.push(uniqueResult);
        }

        ingredientContainer.forEach((ingre) => {
            const allRecipeByIngre = recipe.filter((recipe) => findIngredients(recipe, ingre));
            recipeContainer.push(allRecipeByIngre);
        });

        applianceContainer.forEach((appli) => {
            const allRecipeByAppli = recipe.filter((recipe) => recipe.appliance.toLocaleLowerCase().includes(appli.toLocaleLowerCase()) && recipe.appliance.length === appli.length);
            recipeContainer.push(allRecipeByAppli);
        });

        ustensilContainer.forEach((usten) => {
            const allRecipeByUsten = recipe.filter((recipe) => findUstensils(recipe, usten));
            recipeContainer.push(allRecipeByUsten);
        });

        let result = [];
        if((inputContainer.length !== 0 && input.length >= 3) || ingredientContainer.length !== 0 || applianceContainer.length !== 0 || ustensilContainer.length !== 0){
            result = recipeContainer.shift().filter((a) => recipeContainer.every((b) => b.indexOf(a) !== -1));
        }

        resetLists();

        result.forEach((item) => {
            updateLists(item);
        });

        const recipeection = document.querySelector(".displayrecipe");
        recipeection.innerHTML = "";

        recipes.forEach((recipe) => {
            if(input.length <= 2){
                recipeFactory(recipe)
            }
        });

        result.forEach((item) => {
            recipeFactory(item);
        });

        if(input.length === 0 && ingredientContainer.length === 0 && applianceContainer.length === 0 && ustensilContainer.length === 0){
            resetLists();
            recipe.forEach((item) => {
                updateLists(item);
            });
        }

        const noResult = document.querySelector(".no-result");
        if((input.length >= 3 && result.length === 0) || (result.length === 0 && (ingredientContainer.length !== 0 || applianceContainer.length !== 0 || ustensilContainer.length !== 0))) {
            noResult.style.display = "block";
        } else {
            noResult.style.display = "none";
        }
    }
    addEventListener(pushAllRecipeFind);
}