import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Patients from './views/Patients';
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
    <Route path='/patients'>
      <Patients title='Patients' />
    </Route>
  </Switch>
);

export default Router;
