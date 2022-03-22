// Création du conteneur html dans le DOM pour les tags 
const createTag = (type, category) => {
    const recipeTags = document.querySelector(".recipeTags");
    const spanTag = document.createElement("span"); 

    spanTag.setAttribute("class", `recipeTags_${category}`);
    spanTag.innerHTML = `${type} <span class="recipeTags_${category}-button"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
    </svg>
    </span>`

    recipeTags.appendChild(spanTag);
};

// Création du conteneur html dans le DOM pour la liste des tags 
const createList = (type, category) => {
    
    const list = document.createElement("li");
    list.textContent = type;
    list.setAttribute("class", `${category}-list`);
    const listContainer = document.querySelector(`.search_${category}-combox-list`);
    listContainer.appendChild(list);
};

// Affichage de tous les tags dans les listes d'ingrédients, appareils et ustensils
export default function listAndTags(recipes){
    const totalAppliance = [];
    const totalUstensils = [];
    const totalIngredients = [];

    recipes.forEach((recipe) => {
        totalAppliance.push(recipe.appliance);
        const subIngredients = recipe.ingredients;
        subIngredients.forEach((ingredient) => {
            totalIngredients.push(ingredient.ingredient)
        });
        const subUstensils = recipe.ustensils;
        subUstensils.forEach((ustensil) => {
            totalUstensils.push(ustensil);
        });
    });

    const uniqueAppliance = [...new Set(totalAppliance)];
    const uniqueIngredients = [...new Set(totalIngredients)];
    const uniqueUstensil = [...new Set(totalUstensils)];

    uniqueAppliance.forEach((appliance) => {
        createTag(appliance, "device");
        createList(appliance, "device");
    });

    uniqueIngredients.forEach((ingredient) => {
        createTag(ingredient, "ingredient");
        createList(ingredient, "ingredient");
    });

    uniqueUstensil.forEach((ustensil) => {
        createTag(ustensil, "ustensils");
        createList(ustensil, "ustensils");
    });
};