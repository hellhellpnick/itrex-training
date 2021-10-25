import listenersInputs from './listeners-inputs';

const inputEmail = document.querySelectorAll('.form-main__wrapper--email');
const btnForm = document.querySelector('.form-main__wrapper-btn');
const form = document.getElementsByTagName('form')[0];
const allInputs = document.querySelectorAll('.form-main__wrapper');


form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btnForm.addEventListener('click', () => {
  const blocks = document.querySelectorAll('.form-main__box-content');
  const valueInput = blocks[2].getElementsByTagName('input')[0].value;

  if (blocks[1].getElementsByTagName('input')[0].checkValidity()) {
    blocks[2].classList.replace('is-visible-block', 'is-hidden-block');
    blocks[4].classList.replace('is-hidden-block', 'is-visible-block');
    blocks[4].getElementsByTagName('span')[0].innerHTML = valueInput;
  }
});

listenersInputs(inputEmail);
