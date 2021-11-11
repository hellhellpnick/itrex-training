import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RestorePassword,
  SignUp,
  SignIn,
  PatientProfile,
  DoctorProfile,
} from './views';
import routes from './Routes';

const Router = () => (
  <Switch>
    <Route exact path={routes.signUpPage}>
      <SignUp title='Sign Up' />
    </Route>
    <Route path={routes.signInPage}>
      <SignIn title='Sign In' />
    </Route>
    <Route path={routes.restorePasswordPage}>
      <RestorePassword title='Restore Password' />
    </Route>
    <Route path={routes.DoctorProfile}>
      <DoctorProfile title='Patients' />
    </Route>

    <Route path={routes.PatientProfile}>
      <PatientProfile title='Patient' />
    </Route>
  </Switch>
);

export { Router, routes };
