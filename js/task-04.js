let refs = {
    buttonDescEl: document.querySelector('#counter>button[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
    buttonIncrEl: document.querySelector('#counter>button[data-action="increment"]'),
}

refs.counterValue.textContent= 0;
refs.buttonDescEl.addEventListener('click', decrementCounter )

console.log(refs.counterValue);
function decrementCounter() {     
    refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1;
   console.log(refs.counterValue.textContent);   
}
refs.buttonIncrEl.addEventListener('click', incrementCounter );

function incrementCounter() {   
    refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1;
    console.log(refs.counterValue.textContent);
}
