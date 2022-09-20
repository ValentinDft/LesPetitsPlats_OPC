import { getRepice } from "./api/getRepice.js"
import { cardRepice} from "./cardRepice.js"

let fetchData = async () => {
  const repice = await getRepice();
  displayRepice(repice);
}

let displayRepice = (data) => {
  const repiceSection = document.querySelector("#list_repice");

  data.map((repice) => {
    const card = cardRepice(repice);
    repiceSection.appendChild(card);
  })
}

fetchData();