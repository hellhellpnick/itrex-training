import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addPatient } from '../redux/patient/patientOperations';
import {
  loginForm,
  registerForm,
} from '../redux/formFeatures/formFeaturesOperations';
import {
  getAvailableTime,
  getAllSpecializations,
  getDoctorsBySpecializations,
} from './../redux/patient/patientOperations';

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

  const getAvailableTimePatient = useCallback(
    (doctorId, time, statePatient) => {
      const data = dispatch(getAvailableTime(doctorId, time));
      data.then((response) => {
        statePatient(response.data);
      });
    },
    [dispatch]
  );

  const getAllSpecializationsDoctors = useCallback(
    (stateDoctor) => {
      const data = dispatch(getAllSpecializations());
      data.then((response) =>
        stateDoctor(
          response.data.map((item) => ({
            value: item.id,
            label: item.specialization_name,
          }))
        )
      );
    },
    [dispatch]
  );

  const getDoctorsBySpecializationsNow = useCallback(
    (specializationId, stateDoctor) => {
      const data = dispatch(getDoctorsBySpecializations(specializationId));
      data.then((response) => {
        stateDoctor(
          response.data.map((item) => ({
            value: item.id,
            label: `${item.first_name} ${item.last_name}`,
          }))
        );
      });
    },

    [dispatch]
  );

  return {
    getDoctorsBySpecializationsNow,
    createPatient,
    loginUser,
    registerUser,
    profile,
    getAvailableTimePatient,
    getAllSpecializationsDoctors,
  };
}

export default useActionsWithRedux;
