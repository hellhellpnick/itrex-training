const checkValidInput = (item) => {
  item.getElementsByTagName('input')[0].addEventListener('change', (e) => {
    const value = e.currentTarget.value;
    const regul = new RegExp(
      e.currentTarget.getAttribute('type') == 'email'
        ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        : /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/,
    );

    if (!regul.test(value)) {
      item.querySelector('.form-main__input').classList.add('is-error-input');
      item
        .getElementsByTagName('label')[0]
        .classList.replace('is-hidden-error', 'is-visible-error');
    } else {
      item.querySelector('.form-main__input').classList.remove('is-error-input');
      item
        .getElementsByTagName('label')[0]
        .classList.replace('animate__backInUp', 'animate__backOutDown');

      setTimeout(() => {
        item
          .getElementsByTagName('label')[0]
          .classList.replace('is-visible-error', 'is-hidden-error');
        item
          .getElementsByTagName('label')[0]
          .classList.replace('animate__backOutDown', 'animate__backInUp');
      }, 1000);
    }
  });
};

const listenersInputs = (el) => {
  el.forEach((item) => {
    if (item.classList.contains('form-main__wrapper--password')) {
      item.addEventListener('click', (e) => {
        if (item.classList.contains('form-main__wrapper--password-visible')) {
          item.classList.remove('form-main__wrapper--password-visible');
          item.getElementsByTagName('input')[0].setAttribute('type', 'password');
        } else if ((item.offsetWidth / 100) * 85 < e.layerX) {
          item.classList.add('form-main__wrapper--password-visible');
          item.getElementsByTagName('input')[0].setAttribute('type', 'text');
        }
      });
    }

    checkValidInput(item);
  });
};

export default listenersInputs;
