import { createAction } from '@reduxjs/toolkit';

const createPatientRequest = createAction('user/createAppointmentRequest');
const createPatientSuccess = createAction('user/createAppointmentSuccess');
const createPatientError = createAction('user/createAppointmentError');

export { createPatientRequest, createPatientSuccess, createPatientError };
