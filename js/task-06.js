const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur', onInputBlur)

function onInputBlur(){

    if(inputTextEl.value.length === Number(inputTextEl.getAttribute('data-length')))  
    {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
    }else if(inputTextEl.value.length < Number(inputTextEl.getAttribute('data-length')) && (inputTextEl.value.length > 0))
    {
        inputTextEl.classList.add('invalid');
        inputTextEl.classList.remove('valid');
    } else {
        inputTextEl.classList.remove('invalid');
        inputTextEl.classList.remove('valid');
    }

}