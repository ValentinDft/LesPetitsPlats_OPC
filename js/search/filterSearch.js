export const filterSearch = (list, arrayData, inputValue) => {
  list.replaceChildren();

  const filter = arrayData.filter((item) => {
    return item.toLowerCase().includes(inputValue.toLowerCase());
  });

  return filter;
};
