import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  registerSuccess,
  getUserProfileSuccess,
  loginSuccess,
  registerError,
  loginError,
  getUserProfileError,
} from './formFeaturesActions';

const user = createReducer(
  {},
  {
    [getUserProfileSuccess]: (_, { payload }) => ({
      ...payload,
    }),
  }
);

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.access_token,
  [loginSuccess]: (_, { payload }) => payload.access_token,
  
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getUserProfileError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
