import { createAction } from '@reduxjs/toolkit';

const createPatientRequest = createAction('user/createAppointmentRequest');
const createPatientSuccess = createAction(
  'user/createAppointmentSuccess',
  (date) => ({
    payload: date,
  })
);
const createPatientError = createAction(
  'user/createAppointmentError',
  (date) => ({
    payload: date,
  })
);

const getResolutionsPatientRequest = createAction('doctor/getPatientRequest');
const getResolutionsPatientSuccess = createAction(
  'doctor/getPatientSuccess',
  (date) => ({
    payload: date,
  })
);
const getResolutionsPatientError = createAction(
  'doctor/getPatientError',
  (date) => ({
    payload: date,
  })
);

export {
  createPatientRequest,
  createPatientSuccess,
  createPatientError,
  getResolutionsPatientRequest,
  getResolutionsPatientSuccess,
  getResolutionsPatientError,
};
