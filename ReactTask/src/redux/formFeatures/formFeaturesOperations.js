import axios from 'axios';

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

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';

const token = {
  set(tok) {
    axios.defaults.headers.common.Authorization = `${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const loginForm = (credentials, changePage, pageBack) => async (dispatch) => {
  dispatch(loginRequest());
  dispatch(getUserProfileRequest());

  try {
    const { data } = await axios.post('api/auth/login', credentials);

    token.set(data.access_token);

    dispatch(loginSuccess(data));

    const response = await axios.get('/api/auth/profile');
    dispatch(getUserProfileSuccess(response.data));
    changePage();
  } catch (error) {
    pageBack();
    dispatch(loginError(error.message));
    dispatch(getUserProfileError(error.message));
  }
};

const registerForm =
  (credentials, changePage, pageBack) => async (dispatch) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
      const { data } = await axios.post('api/auth/registration', credentials);
      token.set(data.access_token);
      dispatch(registerSuccess(data));

      const response = await axios.get('/api/auth/profile');
      dispatch(getUserProfileSuccess(response.data));
      changePage();
    } catch (error) {
      pageBack();
      dispatch(registerError(error.message));
      dispatch(getUserProfileError(error.message));
    }
  };

export { loginForm, registerForm };
