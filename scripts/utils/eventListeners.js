import { updateListViaSearchInput, displayTags, removeTags } from "./listParam.js";
  import { ingredientContainer, applianceContainer, ustensilContainer } from "./secondarysearch.js";
  
  export default function addEventListener(PushAllRecipeFind) {
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
  
    const mainSearch = document.getElementById("research");
  
    mainSearch.addEventListener("focusin", () => {
      mainSearch.style.outline = "#D04F4F solid 3px"
    });

    mainSearch.addEventListener("focusout", () => {
      mainSearch.style.outline = "none";
    });

    mainSearch.addEventListener("keyup", () => {
      PushAllRecipeFind();
    });
  
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
  