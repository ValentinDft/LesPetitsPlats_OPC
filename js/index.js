import { getRepice } from "./api/getRepice.js";
import { cardRepice } from "./cardRepice.js";
import { filter } from "./filter.js";
import { searchRepice } from "./search/repiceSearch.js";

let defaultRepice = [];

let fetchData = async () => {
  const repice = await getRepice();
  defaultRepice = repice;
  displayRepice(defaultRepice);

  searchBar(defaultRepice);
};

let displayRepice = (arrayRepice) => {
  const repiceSection = document.querySelector("#list_repice");
  let arrayIngredients = [];
  let arrayDevice = [];
  let arrayUstencils = [];

  for (const repice of arrayRepice) {
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
  }

  let device = [...new Set(arrayDevice)];
  let ingr = [...new Set(arrayIngredients)];
  let stencils = [...new Set(arrayUstencils)];

  filter(ingr, device, stencils, arrayRepice);
};

let capitalizeString = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

let searchBar = (data) => {
  const inputSearch = document.getElementById("search-bar_input");
  let newArrayRepice = [];
  const inputHandlerRepice = function (e) {
    newArrayRepice = searchRepice(data, e.target.value);
    displayRepice(newArrayRepice);
  };
  inputSearch.addEventListener("input", inputHandlerRepice);
};

fetchData();
