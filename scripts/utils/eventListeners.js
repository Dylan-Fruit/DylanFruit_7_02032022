import { allListUpdate, displayTags, deleteTagsData, } from "./listParam";
import { ingredientContainer, applianceContainer, ustensilContainer } from "./secondarysearch";

export default function addEventListener(pushDataTags) {
    function listElement(type, container) {
        const list = document.querySelector(`${type}-list`);
        const listArray = Array.from(list);

        listArray.forEach((element) => {
            element.addEventListener("click", () => {
                const clickForData = element.innerHTML;
                container.push(container);

                pushDataTags();
                displayTags(`${type}`, clickForData);
            });
        });
    }

    listElement("ingedient", ingredientContainer);
    listElement("device", applianceContainer);
    listElement("ustensils", ustensilContainer);

    const mainSearchBar = document.getElementById("research");

    mainSearchBar.addEventListener("keyup", () => {
        pushDataTags();
    });

    

}

