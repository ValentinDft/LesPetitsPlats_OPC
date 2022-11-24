export const searchRepice = (arrayRepice, inputValue) => {
  const repiceSection = document.querySelector("#list_repice");
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
    return arrayRepice;
  }
};
