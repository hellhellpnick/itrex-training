import ViewBasic from './viewBasic';

class ViewPatients extends ViewBasic {
  constructor(...args) {
    super(...args);
    this.view = '/patients';
  }

  _initLocalListeners() {
    return false;
  }
}

export default ViewPatients;
