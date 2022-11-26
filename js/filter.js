import { filterSearch } from "./search/filterSearch.js";
import { arrayTag, selectFilter } from "./search/selectFilter.js";

export const filter = (
  arrayIngredients,
  arrayDevices,
  arrayStencils,
  arrayRepice
) => {
  const dropdownDefault = [
    ...document.querySelectorAll(".dropdown_no_clicked"),
  ];
  const clicked = [...document.querySelectorAll(".dropdown_clicked")];
  const close = [...document.querySelectorAll(".dropdown_close")];

  for (const dropdown of dropdownDefault) {
    dropdown.addEventListener("click", (event) => {
      const content = document.querySelector(
        `.dropdown_${event.target.dataset.parent}-content`
      );

      if (dropdown.style.display === "") {
        dropdown.style.display = "none";
        content.style.display = "flex";
        for (const drop of clicked) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "flex";
          }
        }
        dropdown.parentElement.style.width = "auto";
        if (dropdown.parentElement.className.includes("stencil")) {
          dropdown.parentElement.style.marginRight = "0px";
        } else {
          dropdown.parentElement.style.marginRight = "10px";
        }
      } else if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        content.style.display = "flex";
        for (const drop of clicked) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "flex";
          }
        }
        dropdown.parentElement.style.width = "auto";
        if (dropdown.parentElement.className.includes("stencil")) {
          dropdown.parentElement.style.marginRight = "0px";
        } else {
          dropdown.parentElement.style.marginRight = "10px";
        }
      }
    });
  }

  for (const dropdown of close) {
    dropdown.addEventListener("click", (event) => {
      const content = document.querySelector(
        `.dropdown_${event.target.dataset.parent}-content`
      );

      if (dropdown.style.display === "") {
        for (const drop of clicked) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "none";
          }
        }
        for (const drop of dropdownDefault) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "flex";
          }
        }
        content.style.display = "none";
        dropdown.parentElement.parentElement.style.width = "150px";
        dropdown.parentElement.style.marginRight = "30px";
      } else if (dropdown.style.display === "flex") {
        for (const drop of clicked) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "none";
          }
        }
        for (const drop of dropdownDefault) {
          if (drop.dataset.parent === event.target.dataset.parent) {
            drop.style.display = "flex";
          }
        }
        content.style.display = "none";

        dropdown.parentElement.parentElement.style.width = "150px";
        dropdown.parentElement.style.marginRight = "30px";
      }
    });
  }

  const contentDropdownIngredients = document.querySelector(
    `.dropdown_ingredients-content`
  );
  const contentDropdownDevice = document.querySelector(
    `.dropdown_device-content`
  );
  const contentDropdownStencils = document.querySelector(
    `.dropdown_stencil-content`
  );

  let listIngredients;
  if (document.getElementById("liste_items_ingredient") === null) {
    listIngredients = document.createElement("ul");
    listIngredients.setAttribute("class", "liste_items");
    listIngredients.setAttribute("id", "liste_items_ingredient");
  } else {
    listIngredients = document.getElementById("liste_items_ingredient");
    listIngredients.replaceChildren();
  }

  let listDevices;
  if (document.getElementById("liste_items_device") === null) {
    listDevices = document.createElement("ul");
    listDevices.setAttribute("class", "liste_items");
    listDevices.setAttribute("id", "liste_items_device");
  } else {
    listDevices = document.getElementById("liste_items_device");
    listDevices.replaceChildren();
  }

  let listStencils;
  if (document.getElementById("liste_items_stencil") === null) {
    listStencils = document.createElement("ul");
    listStencils.setAttribute("class", "liste_items");
    listStencils.setAttribute("id", "liste_items_stencil");
  } else {
    listStencils = document.getElementById("liste_items_stencil");
    listStencils.replaceChildren();
  }

  // Display filter device default value
  displayFilter(arrayDevices, listDevices, arrayRepice, "appliance");

  // Search on filter device
  const filterDevice = document.getElementById("filter-device");
  const inputHandlerDevice = function (e) {
    displayFilter(
      filterSearch(listDevices, arrayDevices, e.target.value, arrayRepice),
      listDevices,
      arrayRepice,
      "appliance"
    );
  };
  filterDevice.addEventListener("input", inputHandlerDevice);

  // Display filter ingredient default value
  displayFilter(arrayIngredients, listIngredients, arrayRepice, "ingredients");

  // Search on filter ingredient
  const filterIngredient = document.getElementById("filter-ingredient");
  const inputHandlerIngredient = function (e) {
    displayFilter(
      filterSearch(
        listIngredients,
        arrayIngredients,
        e.target.value,
        arrayRepice
      ),
      listIngredients,
      arrayRepice,
      "ingredients"
    );
  };
  filterIngredient.addEventListener("input", inputHandlerIngredient);

  // Display filter stencil default value
  displayFilter(arrayStencils, listStencils, arrayRepice, "ustencils");

  // Search on filter stencils
  const filterStencils = document.getElementById("filter-stencils");
  const inputHandlerStencils = function (e) {
    displayFilter(
      filterSearch(listStencils, arrayStencils, e.target.value, arrayRepice),
      listStencils,
      arrayRepice,
      "ustencils"
    );
  };
  filterStencils.addEventListener("input", inputHandlerStencils);

  contentDropdownIngredients.appendChild(listIngredients);
  contentDropdownDevice.appendChild(listDevices);
  contentDropdownStencils.appendChild(listStencils);
};

let displayFilter = (arrayData, list, arrayRepice, category) => {
  let item;
  let msgErrorFilter = document.createElement("p");
  msgErrorFilter.textContent = "Aucun résultat";

  if (arrayData.length === 0) {
    list.appendChild(msgErrorFilter);
  } else {
    for (const data of arrayData) {
      item = document.createElement("li");
      item.textContent = data;
      item.setAttribute("id", data);
      for (const tag of arrayTag) {
        if (data === tag.id) {
          item.setAttribute("class", "item_disabled");
        }
      }

      list.appendChild(item);
      const clickItemsFilter = (e) => {
        selectFilter(e, arrayRepice, category);
      };
      item.addEventListener("click", clickItemsFilter);
    }
  }
};
