export const filter = (arrayIngredients, arrayDevices, arrayStencils) => {
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

  const listIngredients = document.createElement("ul");
  listIngredients.setAttribute("class", "liste_items");

  const listDevices = document.createElement("ul");
  listDevices.setAttribute("class", "liste_items");

  const listStencils = document.createElement("ul");
  listStencils.setAttribute("class", "liste_items");

  let ingredient;
  let device;
  let stencil;
  arrayDevices.map((data) => {
    device = document.createElement("li");
    device.textContent = data;
    listDevices.appendChild(device);
  });
  arrayIngredients.map((data) => {
    ingredient = document.createElement("li");
    ingredient.textContent = data;
    ingredient.setAttribute("id", data);
    listIngredients.appendChild(ingredient);
  });
  arrayStencils.map((data) => {
    stencil = document.createElement("li");
    stencil.textContent = data;
    listStencils.appendChild(stencil);
  });

  contentDropdownIngredients.appendChild(listIngredients);
  contentDropdownDevice.appendChild(listDevices);
  contentDropdownStencils.appendChild(listStencils);
};
