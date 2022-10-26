let refs ={
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}
refs.inputEl.addEventListener('input', handleInputRange);
function handleInputRange(event){
    refs.textEl.style.fontSize = event.currentTarget.value + 'px';
}