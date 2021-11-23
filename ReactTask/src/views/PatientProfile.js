import React, { useEffect, useState } from 'react';
import {
  CreateAppointment,
  StylBoxPatients,
  HeaderProfile,
  MainPatientsAppointment,
} from '../components/';

import patient from '../img/avatars/avatar-patient.png';

const PatientProfile = ({ title }) => {
  const [isHiddenAppointment, setHiddenAppointment] = useState(true);

  useEffect(() => {
    document.title = title || '';
  }, [title]);
  
  const handleContent = () => {
    setHiddenAppointment(!isHiddenAppointment);
  };

  return (
    <StylBoxPatients>
      <HeaderProfile
        firstName={'Larry'}
        lastName='Robbinson'
        position='Doctor'
        isOnline={true}
        wayToImg={patient}
      />

      {isHiddenAppointment ? (
        <MainPatientsAppointment switchContent={handleContent} />
      ) : (
        <CreateAppointment switchContent={handleContent} />
      )}
    </StylBoxPatients>
  );
};

export default PatientProfile;
