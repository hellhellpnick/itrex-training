import ViewBasic from './viewBasic';

class ViewSignUp extends ViewBasic {
  constructor(...args) {
    super(...args);
    this.view = '/';
  }

  localFunction(addUser, onNavClick, checkUser, objData) {
    addUser(objData);
    onNavClick('/patients');

    this.getElement('.header__title').innerHTML = objData.firstName;
    this.getElement('.header__subtitle').innerHTML = objData.lastName;
  }

  _initLocalListeners(addUser, onNavClick, checkUser) {
    super._initLocalListeners(addUser, onNavClick, checkUser);
  }
}

export default ViewSignUp;
