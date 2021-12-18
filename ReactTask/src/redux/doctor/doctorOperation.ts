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

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
const localAuth = localStorage.getItem('persist:auth') || '{}';
const jsonAuth = JSON.parse(localAuth);
axios.defaults.headers.common.Authorization = jsonAuth.token;

export const getDoctors = () =>
  axios.get('/api/appointments/doctor/me', {
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
        '/api/resolutions',
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
      await axios.delete<string>(`/api/appointments/${appointmentId}`);
      dispatch(deleteAppointmentSuccess(appointmentId));
    } catch (error) {
      dispatch(deleteAppointmentError((error as Error).message));
    }
  };
