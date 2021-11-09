import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoctorProfile from './views/DoctorProfile';
import PatientProfile from './views/PatientProfile';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import RestorePassword from './views/RestorePassword';

const Router = () => (
  <Switch>
    <Route exact path='/'>
      <SignUp title='Sign Up' />
    </Route>
    <Route path='/signIn'>
      <SignIn title='Sign In' />
    </Route>
    <Route path='/restorePassword'>
      <RestorePassword title='Restore Password' />
    </Route>
    <Route path='/patientsDoctor'>
      <DoctorProfile title='Patients' />
    </Route>

    <Route path='/patientProfile'>
      <PatientProfile title='Patient' />
    </Route>
  </Switch>
);

export default Router;
