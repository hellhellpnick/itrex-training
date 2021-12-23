import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
  createPatientSuccess,
  getResolutionsPatientSuccess,
  createPatientError,
} from './patientAction';
import { IPatientResolutions } from './../../modules/CardPatientProfile.model';
import { IAddAppointmentResponse } from '../../modules/Redux.model';

const appointments = createReducer<Array<IAddAppointmentResponse>>([], {
  [createPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<IAddAppointmentResponse>
  ) => [...state, payload],
});

const resolutions = createReducer<Array<IPatientResolutions>>([], {
  [getResolutionsPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<IPatientResolutions>>
  ) => [...payload],
});

const error = createReducer<string>('', {
  [createPatientError.type]: (_: string, { payload }: PayloadAction<string>) =>
    payload,
});

export default combineReducers({
  appointments,
  resolutions,
  error,
});
