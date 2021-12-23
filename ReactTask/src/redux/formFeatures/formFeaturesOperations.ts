import axios from 'axios';
import { Dispatch } from 'redux';

import {
  registerSuccess,
  getUserProfileSuccess,
  loginSuccess,
  registerError,
  loginError,
  getUserProfileError,
  loginRequest,
  getUserProfileRequest,
  registerRequest,
} from './formFeaturesActions';
import {
  ILogInForm,
  IRegisterForm,
  ITokens,
  IProfileWithData,
} from '../../modules/Redux.model';
import { alert } from '../err/AlertAction';
import { MessageSuccess, MessageError } from './../../constants';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com/api/';

const token = {
  set(tok: string) {
    axios.defaults.headers.common.Authorization = `${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const loginForm =
  (credentials: ILogInForm) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(loginRequest());
    dispatch(getUserProfileRequest());

    try {
      const { data } = await axios.post<ITokens>('/auth/login', credentials);

      token.set(data.access_token);
      dispatch(loginSuccess(data));

      const response = await axios.get<IProfileWithData>('/auth/profile');
      dispatch(getUserProfileSuccess(response.data));

      dispatch(alert(MessageSuccess));
    } catch (error) {
      dispatch(loginError((error as Error).message));
      dispatch(getUserProfileError((error as Error).message));
      dispatch(alert(MessageError));
    }
  };

const registerForm =
  (credentials: IRegisterForm) =>
  async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
      const { data } = await axios.post<ITokens>(
        '/auth/registration',
        credentials
      );
      token.set(data.access_token);
      dispatch(registerSuccess(data));

      const response = await axios.get<IProfileWithData>('/auth/profile');
      dispatch(getUserProfileSuccess(response.data));
      dispatch(alert(MessageSuccess));
    } catch (error) {
      dispatch(registerError((error as Error).message));
      dispatch(getUserProfileError((error as Error).message));
      dispatch(alert(MessageError));
    }
  };

export { loginForm, registerForm };
