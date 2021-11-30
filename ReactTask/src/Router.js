import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  RestorePassword,
  SignUp,
  SignIn,
  PatientProfile,
  DoctorProfile,
} from './views';

const routes = {
  signUpPage: '/',
  signInPage: '/signIn',
  restorePasswordPage: '/restorePassword',
  patientsDoctor: '/patientsDoctor',
  patientProfile: '/patientProfile',
};

const Router = () => {
  return (
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
      <Route path={routes.patientProfile}>
        <PatientProfile title='Patient' />
      </Route>
      <Route path={routes.patientsDoctor}>
        <DoctorProfile title='Patients' />
      </Route>
    </Switch>
  );
};

export { Router, routes };
