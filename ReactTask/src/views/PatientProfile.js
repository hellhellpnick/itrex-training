import React, { useEffect, useState } from 'react';
import {
  CreateAppointment,
  StylBoxPatients,
  HeaderProfile,
  MainPatientsAppointment,
} from '../components/';
import useActionsWithRedux from '../hooks/useActionsWithRedux';
import patient from '../img/avatars/avatar-patient.png';

const PatientProfile = ({ title }) => {
  const [isHiddenAppointment, setHiddenAppointment] = useState(true);
  const { profile } = useActionsWithRedux();

  const dataUser = profile.first_name
    ? profile
    : {
        first_name: 'Larry',
        last_name: 'Robbinson',
        photo: patient,
        role_name: 'Patient',
      };
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  const handleContent = () => {
    setHiddenAppointment(!isHiddenAppointment);
  };

  return (
    <StylBoxPatients>
      <HeaderProfile
        firstName={dataUser.first_name}
        lastName={dataUser.last_name}
        position={dataUser.role_name}
        isOnline={true}
        wayToImg={dataUser.photo}
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
