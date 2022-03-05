export default function recipeFactory(recipe) {
    const displayRecipe = document.querySelector(".displayrecipe");

    const recipeCard = document.createElement("div");
    recipeCard.setAttribute("class", "displayrecipe_recipecard");
    displayRecipe.appendChild(recipeCard);

    const recipeCardMedia = document.createElement("div");
    recipeCardMedia.setAttribute("class", "displayrecipe_recipecard-media");
    recipeCard.appendChild(recipeCardMedia);

    const recipeCardDescription = document.createElement("div");
    recipeCardDescription.setAttribute("class", "displayrecipe_recipecard-description");
    recipeCard.appendChild(recipeCardDescription);

    const recipeCardDescriptionTitle = document.createElement("div");
    recipeCardDescriptionTitle.setAttribute("class", "displayrecipe_recipecard-title");
    recipeCardDescriptionTitle.innerHTML = recipe.name;
    recipeCardDescription.appendChild(recipeCardDescriptionTitle);

    const recipeCardTitleTimer = document.createElement("div");
    recipeCardTitleTimer.setAttribute("class", "displayrecipe_recipecard-title-timer");
    recipeCardTitleTimer.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
    </svg>    
    <span>${recipe.time} minutes</span>`
    recipeCardDescription.appendChild(recipeCardTitleTimer);

    const recipeCardSubDescription = document.createElement("div");
    recipeCardSubDescription.setAttribute("class", "displayrecipe_recipecard-subdescription");
    recipeCardDescription.appendChild(recipeCardSubDescription);
}