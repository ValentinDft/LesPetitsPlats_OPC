import { getRepice } from './api/getRepice.js';
import { displayRepice, searchBar } from './index.js';
import { arrayTag } from './search/selectFilter.js';

export const displayTag = (arrayRepice, fromSearch) => {
  const listTag = document.querySelector('.list-tag');
  let item;
  let newArrayRepice = [];
  let filterArrayRepice = [];
  listTag.replaceChildren();

  arrayTag.map((tag, index) => {
    if (index === 0) {
      arrayRepice.map((repice) => {
        if (tag.category === 'appliance' && repice.appliance === tag.id) {
          newArrayRepice.push(repice);
        } else if (tag.category === 'ustencils' && repice.ustensils.includes(tag.id.toLowerCase())) {
          newArrayRepice.push(repice);
        } else if (tag.category === 'ingredients') {
          repice.ingredients.map((ingredient) => {
            if (ingredient.ingredient === tag.id) {
              newArrayRepice.push(repice);
            }
          });
        }
      });
    } else {
      filterArrayRepice = newArrayRepice;
      newArrayRepice = [];
      filterArrayRepice.map((repice) => {
        if (tag.category === 'appliance' && repice.appliance === tag.id) {
          newArrayRepice.push(repice);
        } else if (tag.category === 'ustencils' && repice.ustensils.includes(tag.id.toLowerCase())) {
          newArrayRepice.push(repice);
        } else if (tag.category === 'ingredients') {
          repice.ingredients.map((ingredient) => {
            if (ingredient.ingredient === tag.id) {
              newArrayRepice.push(repice);
            }
          });
        }
      });
    }

    item = document.createElement('span');
    item.textContent = tag.id;
    item.setAttribute('id', tag.id);
    item.setAttribute('class', 'tag');
    // Color tag
    if (tag.category === 'appliance') {
      item.style.color = '#68D9A4';
      item.style.borderColor = '#68D9A4';
    } else if (tag.category === 'ingredients') {
      item.style.color = '#3282F7';
      item.style.borderColor = '#3282F7';
    } else if (tag.category === 'ustencils') {
      item.style.color = '#ED6454';
      item.style.borderColor = '#ED6454';
    }
    listTag.appendChild(item);
    const clickTag = async (e) => {
      if (arrayTag.length === 1) {
        arrayTag.splice(index, 1);
        displayTag();
        const repice = await getRepice();
        displayRepice([...new Set(repice)]);
        searchBar([...new Set(repice)]);
      } else {
        arrayTag.splice(index, 1);
        const repice = await getRepice();
        displayTag(repice);
      }
    };
    item.addEventListener('click', clickTag);
  });

  !fromSearch && searchBar(newArrayRepice);
  displayRepice([...new Set(newArrayRepice)]);
};
