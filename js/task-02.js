const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredientsEl = document.querySelector('#ingredients');
const elementsIngredients = [];
for (let i = 0; i < ingredients.length; i+=1) {
  const element = ingredients[i];
  
    const itemOfingredientsEl = document.createElement('li');
    itemOfingredientsEl.classList = 'item';
    itemOfingredientsEl.textContent = element; 
  
    elementsIngredients.push(itemOfingredientsEl);
}
listIngredientsEl.append(...elementsIngredients);


