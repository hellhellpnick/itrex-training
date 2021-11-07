import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Patients from './views/Patients';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import RestorePassword from './views/RestorePassword';

const Router = () => (
  <Switch>
    <Route exact path='/'>
      <SignUp />
    </Route>
    <Route path='/signIn'>
      <SignIn />
    </Route>
    <Route path='/restorePassword'>
      <RestorePassword />
    </Route>
    <Route path='/patients'>
      <Patients />
    </Route>
  </Switch>
);

export default Router;
