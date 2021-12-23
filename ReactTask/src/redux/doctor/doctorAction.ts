import { createAction } from '@reduxjs/toolkit';

const createResolutionRequest = createAction('doctor/createResolutionRequest');
const createResolutionSuccess = createAction(
  'doctor/createResolutionSuccess',
  (date) => ({
    payload: date,
  })
);
const createResolutionError = createAction(
  'doctor/createResolutionError',
  (date) => ({
    payload: date,
  })
);

const getPatientRequest = createAction('doctor/getPatientRequest');
const getPatientSuccess = createAction('doctor/getPatientSuccess', (date) => ({
  payload: date,
}));
const getPatientError = createAction('doctor/getPatientError', (date) => ({
  payload: date,
}));

const deleteAppointmentRequest = createAction(
  'doctor/deleteAppointmentRequest'
);
const deleteAppointmentSuccess = createAction(
  'doctor/deleteAppointmentSuccess',
  (date) => ({
    payload: date,
  })
);
const deleteAppointmentError = createAction(
  'doctor/deleteAppointmentError',
  (date) => ({
    payload: date,
  })
);

export {
  createResolutionRequest,
  createResolutionSuccess,
  createResolutionError,
  deleteAppointmentRequest,
  deleteAppointmentSuccess,
  deleteAppointmentError,
  getPatientRequest,
  getPatientSuccess,
  getPatientError,
};
