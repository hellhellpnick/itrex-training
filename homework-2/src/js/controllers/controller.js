import signUp from '../pages/sign-up-page';
import signIn from '../pages/sign-in-page';
import restorePassword from '../pages/restore-password-page';
import patients from '../pages/patients-page';

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

export default Controller;
