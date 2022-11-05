import { cardRepice } from "../cardRepice.js";
let itemSelect;

export const selectFilter = (element, arrayData) => {
  let newArrayRepice = [];
  // if (itemSelect) {
  //   if (itemSelect.target.id !== element.target.id) {
  //     itemSelect.target.style.color = "white";
  //   }
  // }
  itemSelect = element;
  element.target.style.color = "black";

  // arrayRepice.map((repice) => {
  //   if (repice.appliance === element.target.id) {
  //     newArrayRepice.push(repice);
  //   }
  // });

  // displayRecipe(newArrayRepice);
};

// const displayRecipe = (arrayRepice) => {
//   const repiceSection = document.querySelector("#list_repice");
//   repiceSection.replaceChildren();
//   arrayRepice.map((repice) => {
//     const card = cardRepice(repice);
//     repiceSection.appendChild(card);
//   });
// };
