const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl=document.querySelector(".gallery")
console.log(listEl);
const markup = images.map(({
  url,
  alt
}) =>
  `<li>
  <img src="${url}" alt="${alt}" class="image-gallery" >
  </li>`).join('');
  console.log(markup);


listEl.style.listStyle = 'none';
listEl.style.display = 'flex';
listEl.style.justifyContent = 'center';
listEl.style.alignItems = 'center';

listEl.style.gap = '10px';

listEl.insertAdjacentHTML('beforeend', markup);

const itemsEl = document.querySelectorAll('li');
console.log(itemsEl);
itemsEl.forEach(item => item.style.width = '300px');
console.log(itemsEl);
const imagesEl = document.querySelectorAll('.image-gallery');
console.log(imagesEl);
imagesEl.forEach(image => image.style.width = '100%');
console.log(imagesEl);
