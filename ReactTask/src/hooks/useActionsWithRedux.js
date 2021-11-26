import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addPatient } from '../redux/patient/patientOperations';
import {
  loginForm,
  registerForm,
} from '../redux/formFeatures/formFeaturesOperations';

function useActionsWithRedux() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.authForm.user);

  const createPatient = useCallback(
    (data) => {
      dispatch(addPatient(data));
    },
    [dispatch]
  );

  const loginUser = useCallback(
    (data, changePage, pageBack) => {
      dispatch(loginForm(data, changePage, pageBack));
    },
    [dispatch]
  );

  const registerUser = useCallback(
    (data, changePage, pageBack) => {
      dispatch(registerForm(data, changePage, pageBack));
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
