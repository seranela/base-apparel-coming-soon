let formEmail = document.getElementById('email');
let formSubmit = document.getElementById('submit-button');
let formInvalidMessage = document.getElementById('invalid-message');
let isFormValid = false;

formEmail.addEventListener('input', (e) => {
   isFormValid = e.target.validity.valid;
}, false);

formSubmit.addEventListener('click', (e) => {
   if (isFormValid)
      formInvalidMessage.style.display = 'none';
   else
      formInvalidMessage.style.display = 'block';
}, false);