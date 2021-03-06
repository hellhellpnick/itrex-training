import axios from 'axios';
import { Dispatch } from 'redux';
import {
  createResolutionRequest,
  createResolutionSuccess,
  createResolutionError,
  deleteAppointmentRequest,
  deleteAppointmentSuccess,
  deleteAppointmentError,
} from './doctorAction';
import {
  IResolution,
  IResolutionResponse,
} from './../../modules/ResolutionPatient.model';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com/api';
const localAuth = localStorage.getItem('persist:authForm') || '{}';
const jsonAuth = JSON.parse(localAuth);
const token = jsonAuth.token.replace(/"/g, '');
axios.defaults.headers.common.Authorization = token;

export const getDoctors = () =>
  axios.get('/appointments/doctor/me', {
    params: {
      offset: 0,
      limit: 5,
    },
  });

export const createResolution =
  (values: IResolution) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(createResolutionRequest());

    try {
      const { data } = await axios.post<IResolutionResponse>(
        '/resolutions',
        values
      );
      dispatch(createResolutionSuccess(data));
    } catch (error) {
      dispatch(createResolutionError((error as Error).message));
    }
  };

export const deleteAppointment =
  (appointmentId: string) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(deleteAppointmentRequest());

    try {
      await axios.delete<string>(`/appointments/${appointmentId}`);
      dispatch(deleteAppointmentSuccess(appointmentId));
    } catch (error) {
      dispatch(deleteAppointmentError((error as Error).message));
    }
  };
