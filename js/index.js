import { getRepice } from "./api/getRepice.js"
import { cardRepice} from "./cardRepice.js"

let fetchData = async () => {
  const repice = await getRepice();
  displayRepice(repice);
}

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
    })

    repice.ustensils.map((ustensils) => {
      arrayUstencils.push(capitalizeString(ustensils));
    })
  })

  let sans_doublons = [...new Set(arrayDevice)];
  let oui = [...new Set(arrayIngredients)];
  let non = [...new Set(arrayUstencils)];
}

let capitalizeString = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

fetchData();