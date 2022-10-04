export const filter = (arrayIngredients, arrayDevices, arrayStencils) => {
  const select = [...document.querySelectorAll('.dropdown-button')];

  select.map((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      const content = document.querySelector(`.dropdown_${event.target.id}-content`);
      
      if (content.style.display === '') {
        content.style.display = "flex";
        dropdown.setAttribute('class', `${dropdown.classList.value} dropdown_clicked`);
        dropdown.children[0].style.display = 'none';
        dropdown.children[1].style.display = 'flex';
      } else if (content.style.display === 'none') {
        content.style.display = "flex";
        dropdown.setAttribute('class', `${dropdown.classList.value} dropdown_clicked`);
        dropdown.children[0].style.display = 'none';
        dropdown.children[1].style.display = 'flex';
      } else if (content.style.display === 'flex') {
        content.style.display = "none";
        dropdown.setAttribute('class', `${dropdown.classList[0]} ${dropdown.classList[1]}`);
        dropdown.children[0].style.display = 'flex';
        dropdown.children[1].style.display = 'none';
      }
    })
  })

  const contentDropdownIngredients = document.querySelector(`.dropdown_ingredients-content`);
  const contentDropdownDevice = document.querySelector(`.dropdown_device-content`);
  const contentDropdownStencils = document.querySelector(`.dropdown_stencil-content`);

  const listIngredients = document.createElement('ul');
  listIngredients.setAttribute('class', 'liste_items');

  const listDevices = document.createElement('ul');
  listDevices.setAttribute('class', 'liste_items');

  const listStencils = document.createElement('ul');
  listStencils.setAttribute('class', 'liste_items');
  
  let ingredient;
  let device;
  let stencil;
  arrayDevices.map((data) => {
    device = document.createElement('li');
    device.textContent = data;
    listDevices.appendChild(device);
  })
  arrayIngredients.map((data) => {
    ingredient = document.createElement('li');
    ingredient.textContent = data;
    ingredient.setAttribute('id', data);
    listIngredients.appendChild(ingredient);
  })
  arrayStencils.map((data) => {
    stencil = document.createElement('li');
    stencil.textContent = data;
    listStencils.appendChild(stencil);
  })

  contentDropdownIngredients.appendChild(listIngredients);
  contentDropdownDevice.appendChild(listDevices);
  contentDropdownStencils.appendChild(listStencils);
}
