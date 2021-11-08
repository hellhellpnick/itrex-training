import ViewBasic from './viewBasic';

class ViewRestorePassword extends ViewBasic {
  constructor(...args) {
    super(...args);
    this.view = '/restorePassword';
  }

  localFunction(addUser, onNavClick, checkUser, objData) {
    const blocks = document.querySelectorAll('.form-main__box-content');
    const valueInput = blocks[2].getElementsByTagName('input')[0].value;

    if (blocks[1].getElementsByTagName('input')[0].checkValidity()) {
      blocks[2].classList.replace('is-visible-block', 'is-hidden-block');
      blocks[4].classList.replace('is-hidden-block', 'is-visible-block');
      blocks[4].getElementsByTagName('span')[0].innerHTML = valueInput;
    }
  }

  _initLocalListeners(addUser, onNavClick, checkUser) {
    super._initLocalListeners(addUser, onNavClick, checkUser);
  }
}

export default ViewRestorePassword;
