import { FunctionComponent, useEffect } from 'react';
import {
  StylBoxPatients,
  HeaderProfile,
  MainPatientsAppointment,
} from '../components';

import avatarImg from './../img/avatars/avatar-patient.png';

interface IPatientProfile {
  title: string;
}

const PatientProfile: FunctionComponent<IPatientProfile> = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <StylBoxPatients>
      <HeaderProfile avatar={avatarImg} />
      <MainPatientsAppointment />
    </StylBoxPatients>
  );
};

export default PatientProfile;
