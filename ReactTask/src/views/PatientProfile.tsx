import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  CreateAppointment,
  StylBoxPatients,
  HeaderProfile,
  MainPatientsAppointment,
} from '../components';

import avatarImg from './../img/avatars/avatar-patient.png';

interface IPatientProfile {
  title: string;
}

const PatientProfile: FunctionComponent<IPatientProfile> = ({ title }) => {
  const [isHiddenAppointment, setHiddenAppointment] = useState(true);

  useEffect(() => {
    document.title = title || '';
  }, [title]);

  const handleContent = () => {
    setHiddenAppointment(!isHiddenAppointment);
  };

  return (
    <StylBoxPatients>
      <HeaderProfile avatar={avatarImg} />

      {isHiddenAppointment ? (
        <MainPatientsAppointment switchContent={handleContent} />
      ) : (
        <CreateAppointment switchContent={handleContent} />
      )}
    </StylBoxPatients>
  );
};

export default PatientProfile;
