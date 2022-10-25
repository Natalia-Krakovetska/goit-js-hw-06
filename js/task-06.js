const inputTextEl = document.querySelector('#validation-input');
console.log(inputTextEl);
inputTextEl.addEventListener('blur', addInputValue)
console.log(inputTextEl);

function addInputValue(){
    if(inputTextEl.value.length === 0){
        inputTextEl.getAttribute('data-length');
    }
    else  if(inputTextEl.value.length < Number(inputTextEl.getAttribute('data-length'))){
        inputTextEl.classList.add('invalid');
        inputTextEl.classList.remove('valid');
    } 
    else   
    {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
    }
}
console.log(inputTextEl);