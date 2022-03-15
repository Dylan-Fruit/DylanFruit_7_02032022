import { findIngredients, UstensilFind, recipeContainer } from "./secondarysearch";

function listReset() {
    const allList = document.querySelectorAll(".ingredient-list,.device-list,.ustensils-list");

    const allListArray = Array.from(allList);
    allListArray.forEach((element) => {
        const object = element;
        object.style.display = "none";
    });
}

function searchInput(input, type) {
    const list = document.querySelector(`${type}-list`);
    const listArray = Array.from(list);
    listArray.forEach((element) => {
        object.style.display = "none";
        if(element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
            object.style.display = "block";
        }
    });
}

function allListUpdate(recipe){
    const ingredientList = document.querySelectorAll(".ingredient-list");
    const deviceList = document.querySelectorAll(".device-list");
    const ustensilsList = document.querySelectorAll("ustensils-list");

    const ingredientArray = Array.from(ingredientList);
    const deviceArray = Array.from(deviceList);
    const ustensilsArray = Array.from(ustensilsList);

    ingredientArray.forEach((element) => {
        const listText = element.innerText;
        const object = element;

        if(findIngredients(recipe, listText)) {
            object.style.display = "block"
        }
    });

    deviceArray.forEach((element) => {
        const listText = element.innerText;
        const object = element;

        if(listText.toLocaleLowerCase().includes(recipe.appliance.toLocaleLowerCase()) && recipe.appliance.length === listText.length){
            object.style.display = "block";
        }
    });

    ustensilsArray.forEach((element) => {
        const listText = element.innerText; 
        const object = element;

        if(UstensilFind(recipe, listText)){
            object.style.display = "block";
        }
    });
}

function displayTags(type, dataOnClick){
    const actualTags = document.getElementsByClassName(`recipeTags_${type}`);
    const actualTagsArray = Array.from(actualTags);

    actualTagsArray.forEach((element) => {
        if(element.innerText.replace(/\s+/g, "") === dataOnClick.replace(/\s+/g, "")){
            const object = element;
            object.style.display = "block";
        }
    });
}

function deleteTagsData(element, container){
    const object = element;
    object.parentElement.style.display = "none";
    const tagName = object.parentElement.innerText.replace(/\s+/g, "");
    container.forEach((item) => {
        if(item.replace(/\s+/g, "") === tagName){
            let i = 0;
            while(i < container.length){
                if(container[i] === item){
                    container.splice(i, 1);
                    recipeContainer.length = 0;
                } else {
                    i += 1;
                }
            }
        }
    });
}

export { listReset, searchInput, allListUpdate, displayTags, deleteTagsData };