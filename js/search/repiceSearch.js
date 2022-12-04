import { displayTag } from '../tag.js';
import { arrayTag } from './selectFilter.js';

export const searchRepice = (arrayRepice, inputValue, defaultRepice) => {
  const repiceSection = document.querySelector('#list_repice');
  let repiceSearch = [];

  if (inputValue.length >= 3) {
    repiceSection.replaceChildren();
    for (const item of arrayRepice) {
      if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
        repiceSearch.push(item);
      }
    }

    return repiceSearch;
  } else if (inputValue.length <= 2) {
    if (arrayTag.length > 0) {
      displayTag(defaultRepice, true);
    } else {
      return arrayRepice;
    }
  }
};
