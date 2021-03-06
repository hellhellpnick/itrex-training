class ViewBasic {
  constructor() {
    this.app = this.getElement('#root');
  }

  getElement(item) {
    const element = document.querySelector(item);
    return element;
  }

  getElements(items) {
    const element = document.querySelectorAll(items);
    return element;
  }

  getTypeRegulary(input) {
    if (input.getAttribute('type') == 'email') {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    } else if (input.getAttribute('type') == 'password') {
      return /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/;
    }
  }

  localFunction(addUser, onNavClick, checkUser, objData) {
    return false;
  }

  _initLocalListeners(addUser, onNavClick, checkUser) {
    this.getElement('.form-main').addEventListener('submit', (e) => {
      const boolArr = [];
      e.preventDefault();

      e.path[0].querySelectorAll('input').forEach((item) => {
        if (item.type == 'email' || item.type == 'password') {
          let label = document.querySelector(`[for="${item.id}"]`);
          const value = item.value;
          const regul = new RegExp(this.getTypeRegulary(item));

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
        let objData = {};

        e.path[0].querySelectorAll('input').forEach((item) => {
          objData[item.id] = item.value;
        });

        this.localFunction(addUser, onNavClick, checkUser, objData);
      }
    });

    this.getElements('.form-main__wrapper--password').forEach((el) => {
      el.addEventListener('click', (e) => {
        if (
          el.classList.contains('form-main__wrapper--password-visible') &&
          !((el.offsetWidth / 100) * 85 > e.layerX)
        ) {
          el.classList.remove('form-main__wrapper--password-visible');
          el.getElementsByTagName('input')[0].setAttribute('type', 'password');
        } else if ((el.offsetWidth / 100) * 85 < e.layerX) {
          el.classList.add('form-main__wrapper--password-visible');
          el.getElementsByTagName('input')[0].setAttribute('type', 'text');
        }
      });
    });

    this.getElements('.router').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        onNavClick(`/${e.currentTarget.id}`);
      });
    });
  }
}

export default ViewBasic;
