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

export default ViewPatients;
