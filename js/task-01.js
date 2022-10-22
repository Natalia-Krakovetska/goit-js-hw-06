const itemsEl = document.querySelectorAll('.item');
console.log("Number of categories :", itemsEl.length);


const firstItemEl = itemsEl[0];
const firstTitleEl = firstItemEl.firstElementChild;
console.log('Category :', firstTitleEl.textContent);
const firstListOfGoodsEl = firstItemEl.lastElementChild;
const firstItemsOfGoodsEl = firstListOfGoodsEl.children;
console.log('Elements :', firstItemsOfGoodsEl.length);

const secondItemEl =  itemsEl[1];
const secondTitleEl = secondItemEl.firstElementChild;
console.log('Category :', secondTitleEl.textContent);
const secondListOfGoodsEl = secondItemEl.lastElementChild;
const secondItemsOfGoodsEl = secondListOfGoodsEl.children;
console.log('Elements :', secondItemsOfGoodsEl.length);

const thirdItemEl =  itemsEl[2];
const thirdTitleEl = thirdItemEl.firstElementChild;
console.log('Category :', thirdTitleEl.textContent);
const thirdListOfGoodsEl = thirdItemEl.lastElementChild;
const thirdItemsOfGoodsEl = thirdListOfGoodsEl.children;
console.log('Elements :', thirdItemsOfGoodsEl.length);


