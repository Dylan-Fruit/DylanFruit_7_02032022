import { updateListViaSearchInput, displayTags, removeTags } from "./listParam.js";
  import { ingredientContainer, applianceContainer, ustensilContainer } from "./secondarysearch.js";
  
  export default function addEventListener(PushAllRecipeFind) {
    // Écouteur d'évènement au clic, affichage des tags et affichage des recettes correspondantes 
    function ClickOnListElement(type, box) {
      const Li = document.getElementsByClassName(`${type}-list`);
      const LiArray = Array.from(Li);
  
      LiArray.forEach((e) => {
        e.addEventListener("click", () => {
          const dataOnClick = e.innerHTML;
          box.push(dataOnClick);
  
          PushAllRecipeFind();
          displayTags(`${type}`, dataOnClick);
        });
      });
    }
  
    ClickOnListElement("ingredient", ingredientContainer);
    ClickOnListElement("device", applianceContainer);
    ClickOnListElement("ustensils", ustensilContainer);
  
    // Affichage d'une bordure de la couleur du logo au focus dans l'input
    const mainSearch = document.getElementById("research");
    const mainSearchSvg = document.querySelector(".mainsearch_search-label svg path");
  
    mainSearch.addEventListener("focusin", () => {
      mainSearch.style.outline = "#D04F4F solid 3px";
      mainSearchSvg.style.fill = "#D04F4F"
    });

    mainSearch.addEventListener("focusout", () => {
      mainSearch.style.outline = "none";
      mainSearchSvg.style.fill = "black";
    });

    // Écouteur d'évènement à l'écriture dans l'input principal, affichage des recettes trouvées 
    mainSearch.addEventListener("keyup", () => {
      PushAllRecipeFind();
    });
  
    // Écouteur d'évènement pour la recherche via l'input des combobox
    function updateListViaSearchInputListeners(type) {
      const input = document.getElementById(`${type}`);
  
      input.addEventListener("keyup", () => {
        const data = input.value;
        updateListViaSearchInput(data, "ingredient");
      });

      input.addEventListener("keyup", () => {
          const data = input.value;
          updateListViaSearchInput(data, "device");
      });

      input.addEventListener("keyup", () => {
          const data = input.value;
          updateListViaSearchInput(data, "ustensils");
      });
    }
    updateListViaSearchInputListeners("ingredient");
    updateListViaSearchInputListeners("device");
    updateListViaSearchInputListeners("ustensils");
  
    // Écouteur d'évènement pour fermer les tags via la croix
    const allTagCloseCross = document.querySelectorAll(".recipeTags_ingredient-button,.recipeTags_device-button,.recipeTags_ustensils-button");
    const allTagCloseCrossArray = Array.from(allTagCloseCross);
  
    allTagCloseCrossArray.forEach((element) => {
      element.addEventListener("click", () => {
        removeTags(element, ingredientContainer);
        removeTags(element, ustensilContainer);
        removeTags(element, applianceContainer);
  
        PushAllRecipeFind();
      });
    });
  }
  