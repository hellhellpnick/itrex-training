import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addPatient } from '../redux/patient/patientOperations';
import {
  loginForm,
  registerForm,
} from '../redux/formFeatures/formFeaturesOperations';

interface IProfile {
  authForm: {
    isAuthenticated: boolean;
    user: {
      id: string;
      first_name: string;
      last_name: string;
      photo: string;
      role_name: string;
    };
  };
}

function useActionsWithRedux() {
  const dispatch = useDispatch();
  const profile = useSelector((state: IProfile) => state.authForm.user);

  const createPatient = useCallback(
    (data) => {
      dispatch(addPatient(data));
    },
    [dispatch]
  );

  const loginUser = useCallback(
    (data) => {
      dispatch(loginForm(data));
    },
    [dispatch]
  );

  const registerUser = useCallback(
    (data) => {
      dispatch(registerForm(data));
    },
    [dispatch]
  );

  return {
    createPatient,
    loginUser,
    registerUser,
    profile,
  };
}

export default useActionsWithRedux;
