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
// const option = images[0];
  const listOfImagesEl = document.querySelector('.gallery');
console.log(listOfImagesEl);
const elements = images.map(({url, alt}) =>{
  const itemOfList = listOfImagesEl.insertAdjacentHTML("afterbegin",`<li><img src = `${url}`, alt = `${alt}`></li>`);

  return itemOfList;

})

// const makeListOfImages = images => {
//   return images.map(option =>{
//     const itemOfList = listOfImagesEl.insertAdjacentHTML("afterbegin",'<li></li>');
//     const imageInItem = document.createElement("<img>")
//     imageInItem.url = option.url;
//     imageInItem.alt = option.alt;

//     return itemOfList;
// })
// }
// const elements = makeListOfImages(images);

// const listEl=document.querySelector(".gallery")
// console.log(listEl);
// const markup = images.map(({
//   url,
//   alt
// }) =>
//   `<li>
//   <img src="${url}" alt="${alt}" class="image-gallery">
//   </li>`).join('');
