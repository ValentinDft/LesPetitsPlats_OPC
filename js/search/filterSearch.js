let itemInList;

export const filterSearchWithFilterMethod = (list, arrayData, inputValue) => {
  list.replaceChildren();
  const filter = arrayData.filter((data) => {
    return data.toLowerCase().includes(inputValue.toLowerCase());
  });

  filter.sort().map((data) => {
    itemInList = document.createElement("li");
    itemInList.textContent = data;
    itemInList.setAttribute("id", data);
    list.appendChild(itemInList);
  });
};

export const filterSearchWithForOfMethod = (list, arrayData, inputValue) => {
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
