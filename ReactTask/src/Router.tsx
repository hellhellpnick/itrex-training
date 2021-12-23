import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import useActionsWithRedux from './hooks/useActionsWithRedux';

const PatientProfile = React.lazy(() => import('./views/PatientProfile'));
const SignUp = React.lazy(() => import('./views/SignUp'));
const SignIn = React.lazy(() => import('./views/SignIn'));
const RestorePassword = React.lazy(() => import('./views/RestorePassword'));
const DoctorProfile = React.lazy(() => import('./views/DoctorProfile'));
const CreateAppointment = React.lazy(() => import('./views/CreateAppointment'));
const UserResolution = React.lazy(() => import('./views/UserResolution'));
const NotFound = React.lazy(() => import('./views/NotFound'));

const routes = {
  signUpPage: '/',
  signInPage: '/signIn',
  restorePasswordPage: '/restorePassword',
  patientsDoctor: '/patientsDoctor',
  patientProfile: '/patientProfile',
  createAppointemtn: '/patientProfile/create-appointemnt',
  patientResolution: '/patientProfile/resolution',
  profile: '/profile',
  notFound: '*',
};

const Router: FunctionComponent = () => {
  const { profile = null } = useActionsWithRedux();
  const history = useHistory();

  useEffect(() => {
    if (profile) {
      if (profile.role_name === 'Doctor' || profile.role_name === 'Admin') {
        history.replace(routes.patientsDoctor);
      } else if (profile.role_name === 'Patient') {
        history.replace(routes.patientProfile);
      }
    }
  }, [profile, history]);

  return (
    <Switch>
      <Route path={routes.patientResolution}>
        <UserResolution title='User Resolution' />
      </Route>
      <Route path={routes.createAppointemtn}>
        <CreateAppointment title='Create Appointment' />
      </Route>
      <Route path={routes.patientProfile}>
        <PatientProfile title='Patient' />
      </Route>
      <Route path={routes.patientsDoctor}>
        <DoctorProfile title='Patients' />
      </Route>
      <Route path={routes.restorePasswordPage}>
        <RestorePassword title='Restore Password' />
      </Route>
      <Route path={routes.signInPage}>
        <SignIn title='Sign In' />
      </Route>
      <Route path={routes.signUpPage}>
        <SignUp title='Sign Up' />
      </Route>
      <Route path={routes.notFound}>
        <NotFound title='404' />
      </Route>
    </Switch>
  );
};

export { Router, routes };
