import listenersInputs from './listeners-inputs';

const inputsPassword = document.querySelectorAll('.form-main__wrapper--password');
const inputEmail = document.querySelectorAll('.form-main__wrapper--email');
const form = document.getElementsByTagName('form')[0];
const allInputs = document.querySelectorAll('.form-main__wrapper');

allInputs.forEach((item) => {
  item.getElementsByTagName('input')[0].addEventListener('focus', () => {
    item.classList.toggle('is-focus-input');
  });

  item.getElementsByTagName('input')[0].addEventListener('focusout', () => {
    item.classList.toggle('is-focus-input');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

listenersInputs(inputsPassword);
listenersInputs(inputEmail);
