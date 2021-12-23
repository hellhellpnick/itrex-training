import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  addPatient,
  getResolutionsPatient,
} from '../redux/patient/patientOperations';
import {
  loginForm,
  registerForm,
} from '../redux/formFeatures/formFeaturesOperations';
import { IPatientResolutions } from './../modules/CardPatientProfile.model';
import { IAlertMessage } from '../modules/AlertMessage';
import { alert } from '../redux/err/AlertAction';

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

interface IPatientState {
  patientList: {
    resolutions: IPatientResolutions[];
  };
}

function useActionsWithRedux() {
  const dispatch = useDispatch();
  const profile = useSelector((state: IProfile) => state.authForm.user);
  const resolutionsPatient = useSelector(
    (state: IPatientState) => state.patientList.resolutions
  );
  const alertMessage = useSelector(
    (state: IAlertMessage) => state.alertMessage
  );

  const createPatient = useCallback(
    (data) => {
      dispatch(addPatient(data));
    },
    [dispatch]
  );

  const alertHidden = useCallback(() => {
    dispatch(alert({}));
  }, [dispatch]);

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

  const getResolutionsPatientHandler = useCallback(() => {
    dispatch(getResolutionsPatient());
  }, [dispatch]);

  return {
    createPatient,
    loginUser,
    registerUser,
    profile,
    getResolutionsPatientHandler,
    resolutionsPatient,
    alertMessage,
    alertHidden,
  };
}

export default useActionsWithRedux;
