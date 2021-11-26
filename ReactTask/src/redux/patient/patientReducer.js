import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { createPatientSuccess } from './patientAction';

const appointments = createReducer([], {
  [createPatientSuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  appointments,
});
