import listenersInputs from './listeners-inputs';

const inputsPassword = document.querySelectorAll('.form-main__wrapper--password');
const inputEmail = document.querySelectorAll('.form-main__wrapper--email');
const form = document.getElementsByTagName('form')[0];

console.log(inputsPassword);

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

listenersInputs(inputsPassword);
listenersInputs(inputEmail);
