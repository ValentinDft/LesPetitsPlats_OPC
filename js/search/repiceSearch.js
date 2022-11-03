import { cardRepice } from "../cardRepice.js";

export const searchRepice = (arrayRepice, inputValue) => {
  const repiceSection = document.querySelector("#list_repice");
  let repiceSearch = [];
  repiceSection.replaceChildren();

  for (const item of arrayRepice) {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
      repiceSearch.push(item);
    }
  }

  for (const repice of repiceSearch) {
    const card = cardRepice(repice);
    repiceSection.appendChild(card);
  }
};
