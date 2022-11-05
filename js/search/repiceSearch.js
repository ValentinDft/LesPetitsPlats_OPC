export const searchRepice = (arrayRepice, inputValue) => {
  const repiceSection = document.querySelector("#list_repice");
  let repiceSearch = [];

  repiceSection.replaceChildren();

  for (const item of arrayRepice) {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
      repiceSearch.push(item);
    }
  }

  return repiceSearch;
};
