let bodyEl= document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
let textEl = document.querySelector('.color');

changeColorBtn.addEventListener('click',changeColorBody)

function changeColorBody(){
  bodyEl.style.backgroundColor =  getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

