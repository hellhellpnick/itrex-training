import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  registerSuccess,
  getUserProfileSuccess,
  loginSuccess,
  registerError,
  loginError,
  getUserProfileError,
} from './formFeaturesActions';
import { IProfile } from '../../modules/Redux.model';

const user = createReducer<IProfile>({} as IProfile, {
  [getUserProfileSuccess.type]: (
    _: IProfile,
    { payload }: PayloadAction<IProfile>
  ) => ({
    ...payload,
  }),
});

const token = createReducer(null, {
  [registerSuccess.type]: (_, { payload }) => payload.access_token,
  [loginSuccess.type]: (_, { payload }) => payload.access_token,
});

const error = createReducer(null, {
  [registerError.type]: (_, { payload }) => payload,
  [loginError.type]: (_, { payload }) => payload,
  [getUserProfileError.type]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess.type]: () => true,
  [loginSuccess.type]: () => true,
  [registerError.type]: () => false,
  [loginError.type]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
