import { FunctionComponent, useEffect } from 'react';
import {
  CreateAppointment,
  StylBoxPatients,
  HeaderProfile,
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
      <CreateAppointment />
    </StylBoxPatients>
  );
};

export default PatientProfile;
