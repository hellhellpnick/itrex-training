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

const getResolutionsPatientRequest = createAction('patient/getPatientRequest');
const getResolutionsPatientSuccess = createAction(
  'patient/getPatientSuccess',
  (date) => ({
    payload: date,
  })
);
const getResolutionsPatientError = createAction(
  'patient/getPatientError',
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
