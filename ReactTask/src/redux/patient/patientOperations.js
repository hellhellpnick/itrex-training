import axios from 'axios';
import {
  createPatientRequest,
  createPatientSuccess,
  createPatientError,
} from './patientAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
const localAuth = localStorage.getItem('persist:auth');
const jsonAuth = JSON.parse(localAuth);
const token = jsonAuth.token.replace(/"/g, '');
axios.defaults.headers.common.Authorization = token;

export const getAllSpecializations = () => async () =>
  await axios.get('/api/specializations');

export const getDoctorsBySpecializations = (specializationId) => async () =>
  await axios.get(`/api/doctors/specialization/${specializationId}`);

export const getAvailableTime = (id, date) => async () =>
  await axios.get('/api/appointments/time/free', {
    params: {
      id,
      date,
    },
  });

export const getPatients = () =>
  axios.get('/api/appointments/patient/me', {
    params: {
      offset: 0,
      limit: 5,
    },
  });

export const getDoctors = () =>
  axios.get('/api/appointments/doctor/me', {
    params: {
      offset: 0,
      limit: 5,
    },
  });

export const addPatient = (values) => async (dispatch) => {
  dispatch(createPatientRequest());

  try {
    const { data } = await axios.post('/api/appointments', values);
    dispatch(createPatientSuccess(data));
  } catch (error) {
    dispatch(createPatientError(error.message));
  }
};
