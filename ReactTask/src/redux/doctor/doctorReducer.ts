import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getPatientSuccess,
  deleteAppointmentSuccess,
  deleteAppointmentRequest,
  getPatientRequest,
  createResolutionSuccess,
  createResolutionError,
  deleteAppointmentError,
} from './doctorAction';
import { IResolutionResponse } from './../../modules/ResolutionPatient.model';
import { IPatient } from './../../modules/CardPatientProfile.model';

const patients = createReducer<Array<IPatient>>([], {
  [getPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<IPatient>>
  ) => [...payload],
  [deleteAppointmentSuccess.type]: (
    state,
    { payload }: PayloadAction<string>
  ) => state.filter((item) => item.id !== payload),
});

const isLoading = createReducer(false, {
  [deleteAppointmentRequest.type]: () => true,
  [deleteAppointmentSuccess.type]: () => false,
  [getPatientRequest.type]: () => true,
  [getPatientSuccess.type]: () => false,
});

const resolutions = createReducer<Array<IResolutionResponse>>([], {
  [createResolutionSuccess.type]: (
    state,
    { payload }: PayloadAction<IResolutionResponse>
  ) => [...state, payload],
});

const error = createReducer<string>('', {
  [createResolutionError.type]: (
    _: string,
    { payload }: PayloadAction<string>
  ) => payload,
  [deleteAppointmentError.type]: (
    _: string,
    { payload }: PayloadAction<string>
  ) => payload,
});

export default combineReducers({
  patients,
  resolutions,
  error,
  isLoading,
});
