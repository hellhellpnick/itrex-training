import axios from 'axios';
import { Dispatch } from 'react';
import {
  createPatientRequest,
  createPatientSuccess,
  createPatientError,
  getResolutionsPatientRequest,
  getResolutionsPatientSuccess,
  getResolutionsPatientError,
} from './patientAction';
import {
  IAddAppointment,
  IAddAppointmentResponse,
} from '../../modules/Redux.model';

import { alert } from '../err/alertAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
const localAuth = localStorage.getItem('persist:auth') || '{}';
const jsonAuth = JSON.parse(localAuth);
const token = jsonAuth.token;
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

export const addPatient =
  (values: IAddAppointment) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(createPatientRequest());

    try {
      const { data } = await axios.post<IAddAppointmentResponse>(
        '/api/appointments',
        values
      );
      dispatch(createPatientSuccess(data));
      dispatch(
        alert({
          show: true,
          err: false,
          message: 'Patient added successfully',
        })
      );
    } catch (error) {
      dispatch(
        alert({
          show: true,
          err: false,
          message: 'Something went wrong!',
        })
      );
      dispatch(createPatientError((error as Error).message));
    }
  };

export const getResolutionsPatient =
  () => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getResolutionsPatientRequest());

    try {
      const { data } = await axios.get('/api/resolutions/patient/me', {
        params: {
          offset: 0,
          limit: 100,
        },
      });
      dispatch(getResolutionsPatientSuccess(data.resolutions));
    } catch (error) {
      dispatch(
        alert({
          show: true,
          err: false,
          message: 'Something went wrong!',
        })
      );
      dispatch(getResolutionsPatientError((error as Error).message));
    }
  };
