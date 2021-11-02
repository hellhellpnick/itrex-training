class ViewRestorePassword {
  constructor() {
    this.app = this.getElement('#root');
    this.view = '/restorePassword';
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElements(selector) {
    const element = document.querySelectorAll(selector);
    return element;
  }

  _initLocalListeners(addUser, onNavClick) {
    this.getElement('.form-main').addEventListener('submit', (e) => {
      const boolArr = [];
      e.preventDefault();

      e.path[0].querySelectorAll('input').forEach((item) => {
        if (item.type == 'email' || item.type == 'password') {
          let label = document.querySelector(`[for="${item.id}"]`);
          const value = item.value;
          const regul = new RegExp(
            item.getAttribute('type') == 'email'
              ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              : /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/,
          );

          if (!regul.test(value) || value === '') {
            item.classList.add('is-error-input');
            label.classList.replace('is-hidden-error', 'is-visible-error');
          } else {
            item.classList.remove('is-error-input');
            label.classList.replace('animate__backInUp', 'animate__backOutDown');

            setTimeout(() => {
              label.classList.replace('is-visible-error', 'is-hidden-error');
              label.classList.replace('animate__backOutDown', 'animate__backInUp');
            }, 1000);
          }
        }
      });

      e.path[0].querySelectorAll('input').forEach((item) => {
        if (item.classList.contains('is-error-input')) {
          boolArr.push(false);
        } else {
          boolArr.push(true);
        }
      });

      if (boolArr.every((el) => el === true)) {
        const blocks = document.querySelectorAll('.form-main__box-content');
        const valueInput = blocks[2].getElementsByTagName('input')[0].value;

        if (blocks[1].getElementsByTagName('input')[0].checkValidity()) {
          blocks[2].classList.replace('is-visible-block', 'is-hidden-block');
          blocks[4].classList.replace('is-hidden-block', 'is-visible-block');
          blocks[4].getElementsByTagName('span')[0].innerHTML = valueInput;
        }
      }
    });

    this.getElements('.router').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        onNavClick(`/${e.currentTarget.id}`);
      });
    });
  }
}

export default ViewRestorePassword;
