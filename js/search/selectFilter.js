import { displayTag } from '../tag.js';
let itemSelect;
export let arrayTag = [];

export const selectFilter = async (element, arrayRepice, category) => {
  arrayTag.push({ id: element.target.id, category });
  itemSelect = element;

  displayTag(arrayRepice, false);
};
