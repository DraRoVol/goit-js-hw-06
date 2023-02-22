const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.textContent = value;
  listOfIngredients.append(listItem);
});