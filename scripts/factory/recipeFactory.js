export default function recipeFactory(recipe) {
    const displayRecipe = document.querySelector(".displayrecipe");

    const recipeCard = document.createElement("div");
    recipeCard.setAttribute("class", "displayrecipe_recipecard");
    displayRecipe.appendChild(recipeCard);
}