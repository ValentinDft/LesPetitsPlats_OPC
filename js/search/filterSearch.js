export const filterSearch = (list, arrayData, inputValue, arrayRepice) => {
  list.replaceChildren();
  let itemsFilter = [];

  for (const item of arrayData) {
    if (item.toLowerCase().includes(inputValue.toLowerCase())) {
      itemsFilter.push(item);
    }
  }

  return itemsFilter;
};
