import { findIngredients, findUstensils, recipeContainer } from "./secondarysearch.js";

function resetLists() {
    const AllListItem = document.querySelectorAll(
        ".ingredient-list,.device-list,.ustensils-list"
    );

    const AllListItemArray = Array.from(AllListItem);

    AllListItemArray.forEach((element) => {
        const object = element;

        object.style.display = "none";
    });
}

function updateListViaSearchInput(input, type) {
    const list = document.querySelectorAll(`.${type}-list`);
    const listArray = Array.from(list);

    listArray.forEach((element) => {
        const object = element;
        object.style.display = "none";
        if (element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
            object.style.display = "block";
        }
    });
}

function updateLists(recipe) {
    const ingredientList = document.querySelectorAll(".ingredient-list");
    const deviceList = document.querySelectorAll(".device-list");
    const ustensilsList = document.querySelectorAll(".ustensils-list");

    const ingredientListArray = Array.from(ingredientList);
    const deviceListArray = Array.from(deviceList);
    const ustensilsListArray = Array.from(ustensilsList);

    ingredientListArray.forEach((element) => {
        const listText = element.innerText;
        const object = element;

        if (findIngredients(recipe, listText)) {
            object.style.display = "block";
        }
    });

    deviceListArray.forEach((element) => {
        const listText = element.innerText;
        const object = element;

        if (listText.toLocaleLowerCase().includes(recipe.appliance.toLocaleLowerCase()) &&recipe.appliance.length === listText.length) {
            object.style.display = "block";
        }
    });

    ustensilsListArray.forEach((element) => {
        const listText = element.innerText;
        const object = element;

        if (findUstensils(recipe, listText)) {
            object.style.display = "block";
        }
    });
}

function displayTags(type, dataOnClick) {
    const existingTag = document.getElementsByClassName(`recipeTags_${type}`);

    const existingTagArray = Array.from(existingTag);

    existingTagArray.forEach((element) => {
        if (element.innerText.replace(/\s+/g, "") === dataOnClick.replace(/\s+/g, "")) {
            const object = element;
            object.style.display = "block";
        }
    });
}
function removeTags(element, box) {
    const object = element;
    object.parentElement.style.display = "none";
    const tagName = object.parentElement.innerText.replace(/\s+/g, "");
    box.forEach((item) => {
        if (item.replace(/\s+/g, "") === tagName) {
            let i = 0;
            while (i < box.length) {
                if (box[i] === item) {
                    box.splice(i, 1);
                    recipeContainer.length = 0;
                } else {
                    i += 1;
                }
            }
        }
    });
}
export { resetLists, updateListViaSearchInput, updateLists, displayTags, removeTags };
