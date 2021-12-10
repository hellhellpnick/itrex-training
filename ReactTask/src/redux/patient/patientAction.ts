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

export { createPatientRequest, createPatientSuccess, createPatientError };
