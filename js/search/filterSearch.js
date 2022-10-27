let itemInList;

export const filterSearch = (list, arrayData, inputValue) => {
  list.replaceChildren();
  let itemsFilter = [];

  for (const item of arrayData) {
    if (item.toLowerCase().includes(inputValue.toLowerCase())) {
      itemsFilter.push(item);
    }
  }

  for (const item of itemsFilter) {
    itemInList = document.createElement("li");
    itemInList.textContent = item;
    itemInList.setAttribute("id", item);
    list.appendChild(itemInList);
  }
};
