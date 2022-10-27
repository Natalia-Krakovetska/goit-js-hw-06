let refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event){   
    refs.nameLabel.textContent = event.currentTarget.value;
    if(!refs.input.value.length) {    
    refs.nameLabel.textContent = 'Anonymous';  
    }       
   }   