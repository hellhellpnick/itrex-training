import ViewBasic from './viewBasic';

class ViewSignIn extends ViewBasic {
  constructor(...args) {
    super(...args);
    this.view = '/signIn';
  }

  localFunction(addUser, onNavClick, checkUser, objData) {
    const counter = checkUser(objData);
    let users = JSON.parse(localStorage.getItem('users'));

    if (counter >= 0) {
      onNavClick('/patients');
      this.getElement('.header__title').innerHTML = users[counter].firstName;
      this.getElement('.header__subtitle').innerHTML = users[counter].lastName;
    }
  }

  _initLocalListeners(addUser, onNavClick, checkUser) {
    super._initLocalListeners(addUser, onNavClick, checkUser);
  }
}

export default ViewSignIn;
