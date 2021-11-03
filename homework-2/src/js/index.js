import Controller from './controllers/controller';
import Model from './models/model';
import ViewSignUp from './views/viewSignUp';
import ViewSignIn from './views/viewSignIn';
import ViewRestorePassword from './views/viewRestorePassword';
import ViewPatients from './views/viewPatients';

const app = new Controller(
  new Model(),
  new ViewSignUp(),
  new ViewSignIn(),
  new ViewRestorePassword(),
  new ViewPatients(),
);
