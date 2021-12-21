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
import { MessageSuccess, MessageError } from './../../constants';

import { alert } from './../err/AlertAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com/api';
const localAuth = localStorage.getItem('persist:auth') || '{}';
const jsonAuth = JSON.parse(localAuth);
const token = jsonAuth.token;
axios.defaults.headers.common.Authorization = token;

export const getAllSpecializations = () => axios.get('/specializations');

export const getDoctorsBySpecializations = (specializationId: string) =>
  axios.get(`/doctors/specialization/${specializationId}`);

export const getAvailableTime = (id: string, date: string) =>
  axios.get('/appointments/time/free', {
    params: {
      id,
      date,
    },
  });

export const getPatients = () =>
  axios.get('/appointments/patient/me', {
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
        '/appointments',
        values
      );
      dispatch(createPatientSuccess(data));
      dispatch(alert(MessageSuccess));
    } catch (error) {
      dispatch(alert(MessageError));
      dispatch(createPatientError((error as Error).message));
    }
  };

export const getResolutionsPatient =
  () => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getResolutionsPatientRequest());

    try {
      const { data } = await axios.get('/resolutions/patient/me', {
        params: {
          offset: 0,
          limit: 5,
        },
      });
      dispatch(getResolutionsPatientSuccess(data.resolutions));
    } catch (error) {
      dispatch(alert(MessageError));
      dispatch(getResolutionsPatientError((error as Error).message));
    }
  };
