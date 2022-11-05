import { filterSearch } from "./search/filterSearch.js";
import { selectFilter } from "./search/selectFilter.js";

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

  dropdownDefault.map((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      const content = document.querySelector(
        `.dropdown_${event.target.id}-content`
      );

      if (dropdown.style.display === "") {
        dropdown.style.display = "none";
        content.style.display = "flex";
        clicked.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "flex";
          }
        });

        dropdown.parentElement.style.width = "auto";
        dropdown.parentElement.style.marginRight = "10px";
      } else if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        content.style.display = "flex";
        clicked.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "flex";
          }
        });

        dropdown.parentElement.style.width = "auto";
        dropdown.parentElement.style.marginRight = "10px";
      }
    });
  });

  close.map((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      const content = document.querySelector(
        `.dropdown_${event.target.id}-content`
      );

      if (dropdown.style.display === "") {
        clicked.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "none";
          }
        });
        dropdownDefault.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "flex";
          }
        });
        content.style.display = "none";

        dropdown.parentElement.parentElement.style.width = "150px";
        dropdown.parentElement.style.marginRight = "30px";
      } else if (dropdown.style.display === "flex") {
        clicked.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "none";
          }
        });
        dropdownDefault.map((drop) => {
          if (drop.id === event.target.id) {
            drop.style.display = "flex";
          }
        });
        content.style.display = "none";

        dropdown.parentElement.parentElement.style.width = "150px";
        dropdown.parentElement.style.marginRight = "30px";
      }
    });
  });

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
  displayFilter(arrayDevices, listDevices);

  // Search on filter device
  const filterDevice = document.getElementById("filter-device");
  const inputHandlerDevice = function (e) {
    displayFilter(
      filterSearch(listDevices, arrayDevices, e.target.value, arrayRepice),
      listDevices
    );
  };
  filterDevice.addEventListener("input", inputHandlerDevice);

  // Display filter ingredient default value
  displayFilter(arrayIngredients, listIngredients);

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
      listIngredients
    );
  };
  filterIngredient.addEventListener("input", inputHandlerIngredient);

  // Display filter stencil default value
  displayFilter(arrayStencils, listStencils);

  // Search on filter stencils
  const filterStencils = document.getElementById("filter-stencils");
  const inputHandlerStencils = function (e) {
    displayFilter(
      filterSearch(listStencils, arrayStencils, e.target.value, arrayRepice),
      listStencils
    );
  };
  filterStencils.addEventListener("input", inputHandlerStencils);

  contentDropdownIngredients.appendChild(listIngredients);
  contentDropdownDevice.appendChild(listDevices);
  contentDropdownStencils.appendChild(listStencils);
};

let displayFilter = (arrayData, list) => {
  let item;
  for (const data of arrayData) {
    item = document.createElement("li");
    item.textContent = data;
    item.setAttribute("id", data);
    list.appendChild(item);
    const clickItemsFilter = (e) => {
      selectFilter(e, arrayData);
    };
    item.addEventListener("click", clickItemsFilter);
  }
};
