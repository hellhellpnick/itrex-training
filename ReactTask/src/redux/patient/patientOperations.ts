import axios from 'axios';
import { Dispatch } from 'react';
import {
  createPatientRequest,
  createPatientSuccess,
  createPatientError,
} from './patientAction';
import {
  IAddAppointment,
  IAddAppointmentResponse,
} from '../../modules/Redux.model';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
const localAuth = localStorage.getItem('persist:auth') || '{}';
const jsonAuth = JSON.parse(localAuth);
const token = jsonAuth.token.replace(/"/g, '');
axios.defaults.headers.common.Authorization = token;

export const getAllSpecializations = () => axios.get('/api/specializations');

export const getDoctorsBySpecializations = (specializationId: string) =>
  axios.get(`/api/doctors/specialization/${specializationId}`);

export const getAvailableTime = (id: string, date: string) =>
  axios.get('/api/appointments/time/free', {
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

export const addPatient =
  (values: IAddAppointment) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(createPatientRequest());

    try {
      const { data } = await axios.post<IAddAppointmentResponse>(
        '/api/appointments',
        values
      );
      dispatch(createPatientSuccess(data));
    } catch (error) {
      dispatch(createPatientError((error as Error).message));
    }
  };
