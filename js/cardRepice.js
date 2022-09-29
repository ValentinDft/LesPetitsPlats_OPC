export const cardRepice = (data) => {
  const article = document.createElement( 'article' );
  article.setAttribute('class', 'card_repice');

  // article img
  const img = document.createElement( 'div' );
  img.setAttribute('class', 'card_repice-img');

  // article details
  const details = document.createElement( 'div' );
  details.setAttribute('class', 'card_repice-details');
  const containerTitle = document.createElement( 'div' );
  containerTitle.setAttribute('class', 'container_space');
  const title = document.createElement( 'h3' );
  title.textContent = data.name;
  const time = document.createElement('h3');
  time.textContent = `${data.time} min`;
  const iconTime = document.createElement('i');
	iconTime.setAttribute('class', 'fa-regular fa-clock');
  const containerDescription = document.createElement( 'div' );
  containerDescription.setAttribute('class', 'container_space');
  const containerIngredient = document.createElement( 'div' );
  containerIngredient.setAttribute('class', 'card_repice-details-ingredient');
  const description = document.createElement( 'p' );
  description.setAttribute('class', "card_repice-details-description");
  description.textContent = data.description;

  const listIngredientDisplay = document.createElement( 'ul' );
  let ingredient;

  data.ingredients.map((dataIngredient) => {
      ingredient = document.createElement('li');
      ingredient.textContent = `${dataIngredient.ingredient}: ${dataIngredient.quantity || dataIngredient.quantite || ''} ${dataIngredient.unit || ''}`
      listIngredientDisplay.appendChild(ingredient);
  })

  // display
  article.appendChild(img);
  article.appendChild(details);
  details.appendChild(containerTitle);
  containerTitle.appendChild(title);
  containerTitle.appendChild(time);
  time.insertBefore(iconTime, time.children[0]);
  details.appendChild(containerDescription);
  containerDescription.appendChild(containerIngredient);
  containerIngredient.appendChild(listIngredientDisplay);
  containerDescription.appendChild(description);
  
  return (article);
}