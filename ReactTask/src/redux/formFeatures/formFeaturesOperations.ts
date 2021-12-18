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
import { alert } from '../err/alertAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';

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
      const { data } = await axios.post<ITokens>('api/auth/login', credentials);

      token.set(data.access_token);
      dispatch(loginSuccess(data));

      const response = await axios.get<IProfileWithData>('/api/auth/profile');
      dispatch(getUserProfileSuccess(response.data));
      dispatch(
        alert({
          show: true,
          err: false,
          message: 'Authorization was successful',
        })
      );
    } catch (error) {
      dispatch(loginError((error as Error).message));
      dispatch(getUserProfileError((error as Error).message));
      dispatch(
        alert({
          show: true,
          err: false,
          message: 'With authorization problems',
        })
      );
    }
  };

const registerForm =
  (credentials: IRegisterForm) =>
  async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
      const { data } = await axios.post<ITokens>(
        'api/auth/registration',
        credentials
      );
      token.set(data.access_token);
      dispatch(registerSuccess(data));

      const response = await axios.get<IProfileWithData>('/api/auth/profile');
      dispatch(getUserProfileSuccess(response.data));
      //NotifySucces('Authorization was successful');
    } catch (error) {
      dispatch(registerError((error as Error).message));
      dispatch(getUserProfileError((error as Error).message));
      //NotifyError('Registration completed successfully');
    }
  };

export { loginForm, registerForm };
