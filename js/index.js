import { getRepice } from './api/getRepice.js';
import { cardRepice } from './cardRepice.js';
import { filter } from './filter.js';
import { searchRepice } from './search/repiceSearch.js';

let defaultRepice = [];

const fetchData = async () => {
  const repice = await getRepice();
  defaultRepice = repice;
  displayRepice(defaultRepice);

  searchBar(defaultRepice);
};

export const displayRepice = (arrayRepice) => {
  const repiceSection = document.querySelector('#list_repice');
  const msgErrorRepice = document.querySelector('.msg-error-repice');
  repiceSection.replaceChildren();
  let arrayIngredients = [];
  let arrayDevice = [];
  let arrayUstencils = [];

  if (arrayRepice.length === 0) {
    msgErrorRepice.style.display = 'flex';
  } else {
    msgErrorRepice.style.display = 'none';
    for (const repice of arrayRepice) {
      const card = cardRepice(repice);
      repiceSection.appendChild(card);
      // Array for filter
      arrayDevice.push(repice.appliance);
      for (const ingredients of repice.ingredients) {
        arrayIngredients.push(capitalizeString(ingredients.ingredient));
      }
      for (const ustensils of repice.ustensils) {
        arrayUstencils.push(capitalizeString(ustensils));
      }
    }
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

export const searchBar = (data) => {
  const inputSearch = document.getElementById('search-bar_input');
  let newArrayRepice = [];
  const inputHandlerRepice = function (e) {
    newArrayRepice = searchRepice(data, e.target.value, defaultRepice);
    newArrayRepice && displayRepice(newArrayRepice);
  };
  inputSearch.addEventListener('input', inputHandlerRepice);
};

fetchData();
