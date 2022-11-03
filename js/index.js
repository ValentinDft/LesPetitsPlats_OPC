import { getRepice } from "./api/getRepice.js";
import { cardRepice } from "./cardRepice.js";
import { filter } from "./filter.js";
import { searchRepice } from "./search/repiceSearch.js";

let fetchData = async () => {
  const repice = await getRepice();
  displayRepice(repice);
};

let displayRepice = (data) => {
  const repiceSection = document.querySelector("#list_repice");
  let arrayIngredients = [];
  let arrayDevice = [];
  let arrayUstencils = [];

  data.map((repice) => {
    const card = cardRepice(repice);
    repiceSection.appendChild(card);

    // Array for filter
    arrayDevice.push(repice.appliance);

    repice.ingredients.map((ingredients) => {
      arrayIngredients.push(capitalizeString(ingredients.ingredient));
    });

    repice.ustensils.map((ustensils) => {
      arrayUstencils.push(capitalizeString(ustensils));
    });
  });

  let device = [...new Set(arrayDevice)];
  let ingr = [...new Set(arrayIngredients)];
  let stencils = [...new Set(arrayUstencils)];
  filter(ingr, device, stencils);
  searchBar(data);
};

let capitalizeString = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

let searchBar = (data) => {
  const inputSearch = document.getElementById("search-bar_input");
  const inputHandlerRepice = function (e) {
    searchRepice(data, e.target.value);
  };
  inputSearch.addEventListener("input", inputHandlerRepice);
};

fetchData();
