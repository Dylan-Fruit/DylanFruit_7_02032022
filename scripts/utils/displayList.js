export default function displayList() {
  // Fonction pour ouvrir les listes d'ingrédients, d'appareils et d'ustensiles
  const showList = (type) => {
    const searchBox = document.querySelector(`.search_${type}`);
    const searchCombox = document.querySelector(`.search_${type}-combox`);
    const searchInput = document.getElementById(`${type}`);
    const searchFieldLabel = document.querySelector(
      `.search_${type}-combox-searchfieldLabel`
    );
    const chevron = document.querySelector(
      `.search_${type}-combox-searchfield-chevron`
    );
    const searchList = document.querySelector(`.search_${type}-combox-list`);

    if (window.innerWidth <= 767) {
      searchBox.style.width = "100%";
    } else {
      searchBox.style.width = "100%";
      searchBox.style.maxWidth = "667px";
    }
    searchInput.style.display = "block";
    searchList.style.display = "flex";
    searchFieldLabel.style.display = "none";
    chevron.style.transform = "rotate(180deg)";
  };

  // Fonction pour refermer les listes d'ingrédients, d'appareils et d'ustensiles
  const hideList = (type) => {
    const searchBox = document.querySelector(`.search_${type}`);
    const searchCombox = document.querySelector(`.search_${type}-combox`);
    const searchInput = document.getElementById(`${type}`);
    const searchFieldLabel = document.querySelector(
      `.search_${type}-combox-searchfieldLabel`
    );
    const chevron = document.querySelector(
      `.search_${type}-combox-searchfield-chevron`
    );
    const searchList = document.querySelector(`.search_${type}-combox-list`);

    if (window.innerWidth <= 767) {
      searchBox.style.width = "100%";
    } else {
      searchBox.style.width = "170px";
      searchBox.style.maxWidth = "667px";
    }
    searchBox.style.height = "69px";
    searchInput.style.display = "none";
    searchList.style.display = "none";
    searchFieldLabel.style.display = "block";
    chevron.style.transform = "none";
  };

  // Appel des éléments dans le DOM pour l'affichage des listes
  const containers = [
    document.querySelector(".search_ingredient"),
    document.querySelector(".search_device"),
    document.querySelector(".search_ustensils"),
  ];

  const containersList = [
    document.querySelector(".search_ingredient-combox-list"),
    document.querySelector(".search_device-combox-list"),
    document.querySelector(".search_ustensils-combox-list"),
  ];

  const chevrons = [
    document.querySelector(".search_ingredient-combox-searchfield-chevron"),
    document.querySelector(".search_device-combox-searchfield-chevron"),
    document.querySelector(".search_ustensils-combox-searchfield-chevron"),
  ];

  // Fonctions de toggle pour les listes, quand une est ouverte les autres sont fermées
  function toggleIngredient() {
    if (
      !containersList[0].getAttribute("style") ||
      containersList[0].getAttribute("style") === "display: none;"
    ) {
      showList("ingredient");
      hideList("ustensils");
      hideList("device");
    } else {
      hideList("ingredient");
    }
  }

  function toggleDevice() {
    if (
      !containersList[1].getAttribute("style") ||
      containersList[1].getAttribute("style") === "display: none;"
    ) {
      showList("device");
      hideList("ingredient");
      hideList("ustensils");
    } else {
      hideList("device");
    }
  }

  function toggleUstensils() {
    if (
      !containersList[2].getAttribute("style") ||
      containersList[2].getAttribute("style") === "display: none;"
    ) {
      showList("ustensils");
      hideList("ingredient");
      hideList("device");
    } else {
      hideList("ustensils");
    }
  }

  // Écouteur d'événement au clic de chaque fonction de toggle
  chevrons[0].addEventListener("click", (e) => {
    e.preventDefault();
    toggleIngredient();
  });
  chevrons[1].addEventListener("click", (e) => {
    e.preventDefault();
    toggleDevice();
  });
  chevrons[2].addEventListener("click", (e) => {
    e.preventDefault();
    toggleUstensils();
  });

  // Ferme la liste ouverte au clic de l'input principal
  const mainSearch = document.getElementById("research");

  mainSearch.addEventListener("click", () => {
    if ((containersList[0].style.display = "flex")) {
      hideList("ingredient");
    }
  });
  mainSearch.addEventListener("click", () => {
    if ((containersList[1].style.display = "flex")) {
      hideList("device");
    }
  });
  mainSearch.addEventListener("click", () => {
    if ((containersList[2].style.display = "flex")) {
      hideList("ustensils");
    }
  });
}
