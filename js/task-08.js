const formEl = document.querySelector('.login-form');
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
  event.preventDefault(); 
 
    const {
      elements: { email, password }
    } = event.currentTarget;

    if (!email.value || !password.value){
       alert("Все поля должны быть заполнены!");
      
      }   else{
        console.log(`Login: ${email.value}, Password: ${password.value}`);
     
        event.currentTarget.reset();
      }   

  } 
