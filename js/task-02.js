const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
const newArray = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient
  liEl.classList.add('item');
  return liEl
})

ulEl.append(...newArray);