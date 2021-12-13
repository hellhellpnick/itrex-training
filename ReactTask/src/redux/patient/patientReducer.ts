import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { createPatientSuccess } from './patientAction';
import { IAddAppointmentResponse } from '../../modules/Redux.model';

const appointments = createReducer<Array<IAddAppointmentResponse>>([], {
  [createPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<IAddAppointmentResponse>
  ) => [...state, payload],
});

export default combineReducers({
  appointments,
});
