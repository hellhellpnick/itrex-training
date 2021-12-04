import React, { useEffect, useState } from 'react';
import { BoxFilter, BoxSearch } from './../components/Boxes';

import {
  StylBoxBtnPatients,
  StylBoxPatientContent,
  StylBoxDoctor,
  StylBoxPatients,
  StylBoxRowPadding,
  StylTitlePatients,
  BtnPatients,
  CardPatientProfile,
  HeaderProfile,
  StylBoxPatientsList,
} from '../components/';

import avatarDoctorImg from '../img/avatars/avatar-doctor.png';
import scheduleImgSvg from './../img/icons/icon-shedule.svg';
import dataProfileDoctor from './../db/dbProfileDoctor.json';
import { getDoctors } from './../redux/patient/patientOperations';
import useActionsWithRedux from '../hooks/useActionsWithRedux';

const DoctorProfile = ({ title }) => {
  const [isAppointments, setAppointments] = useState([]);
  const { profile } = useActionsWithRedux();

  useEffect(() => {
    document.title = title || '';

    profile.role_name === 'Patient'
      ? getDoctors().then((response) =>
          setAppointments(response.data.appointments)
        )
      : setAppointments(dataProfileDoctor);
  }, [title, profile]);

  return (
    <StylBoxPatients>
      <HeaderProfile avatar={avatarDoctorImg} />

      <StylBoxPatientContent>
        <StylBoxBtnPatients>
          <BtnPatients active={true} text='Patients' />
          <BtnPatients active={false} text='Resolutions  ' />
        </StylBoxBtnPatients>
        <StylBoxRowPadding>
          <StylTitlePatients>My patients</StylTitlePatients>
          <StylBoxDoctor>
            <BoxSearch />
            <BoxFilter text='Sort by:' filter='Date' />
          </StylBoxDoctor>
        </StylBoxRowPadding>
        {!!isAppointments.length && (
          <StylBoxPatientsList>
            {isAppointments.map((item, index) => {
              return (
                <CardPatientProfile
                  item={item}
                  key={index}
                  imgIconDescription={scheduleImgSvg}
                />
              );
            })}
          </StylBoxPatientsList>
        )}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default DoctorProfile;
