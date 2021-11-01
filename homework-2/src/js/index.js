import signUp from './pages/sign-up-page';
import signIn from './pages/sign-in-page';
import restorePassword from './pages/restore-password-page';
import patients from './pages/patients-page';

let users = JSON.parse(localStorage.getItem('users')) || [];

class Model {
  addUser(objData) {
    users.push(objData);
    localStorage.setItem('users', JSON.stringify(users));
  }

  checkUser(user) {
    let counter;
    users.map((item, index) => {
      if (item.emailName === user.emailName && item.passwordName === user.passwordName) {
        counter = index;
      }
    });

    return counter;
  }
}

class ViewSignUp {
  constructor() {
    this.app = this.getElement('#root');
    this.view = '/';
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

          if (!regul.test(value)) {
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

        addUser(objData);
        onNavClick('/patients');

        this.getElement('.header__title').innerHTML = objData.firstName;
        this.getElement('.header__subtitle').innerHTML = objData.lastName;
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

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElements(selector) {
    const element = document.querySelectorAll(selector);
    return element;
  }
}

class ViewSignIn {
  constructor() {
    this.app = this.getElement('#root');
    this.view = '/signIn';
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElements(selector) {
    const element = document.querySelectorAll(selector);
    return element;
  }

  _initLocalListeners(addUser, onNavClick, checkUser) {
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

          if (!regul.test(value)) {
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

        if (checkUser(objData) >= 0) {
          onNavClick('/patients');

          console.log(this.getElement('.header__title'));
          this.getElement('.header__title').innerHTML = objData.firstName;
          this.getElement('.header__subtitle').innerHTML = objData.lastName;
        }
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

          if (!regul.test(value)) {
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

class ViewPatients {
  constructor() {
    this.app = this.getElement('#root');
    this.view = '/patients';
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  _initLocalListeners() {
    return false;
  }
}

class Controller {
  constructor(model, viewsignUp, viewsignIn, viewrestorePassword, viewpatients) {
    this.model = model;
    this.views = [viewsignUp, viewsignIn, viewrestorePassword, viewpatients];
    this.routes = {
      '/': signUp,
      '/signIn': signIn,
      '/restorePassword': restorePassword,
      '/patients': patients,
    };

    this.onNavClick('/');

    if (typeof Controller.instance === 'object') {
      return Controller.instance;
    }
    Controller.instance = this;
    return Controller.instance;
  }

  onNavClick = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    this.views[0].app.innerHTML = this.routes[pathname];
    this.views[0].app.innerHTML = this.routes[window.location.pathname];
    window.history.pushState(pathname, window.location.origin + pathname);
    this._initLocalListenersView(window.history.state);
  };

  _initLocalListenersView = (path) => {
    this.views.forEach((el, index) => {
      if (el.view == path) {
        this.views[index]._initLocalListeners(
          this.model.addUser,
          this.onNavClick,
          this.model.checkUser,
        );
      }
    });
  };
}

const app = new Controller(
  new Model(),
  new ViewSignUp(),
  new ViewSignIn(),
  new ViewRestorePassword(),
  new ViewPatients(),
);
