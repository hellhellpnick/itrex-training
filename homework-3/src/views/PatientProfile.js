import React, { useEffect } from 'react';
import { BoxFilter } from '../components/Boxes/';
import {
  StylBoxRowPadding,
  StylBoxPatients,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxPatientContent,
  StylBoxBtnPatients,
  StylBoxRow,
  BtnPatientsHiddenMob,
  BtnCreateAppointment,
  BtnPatients,
  StylSubTitlePosition,
  StylTitlePatients,
  StylTitleName,
  AvatarActive,
  CardProfilePatient,
} from '../components/';

import patient from '../img/avatars/avatar-patient.png';
import patient1 from '../img/avatars/patients-13.png';
import logo from '../img/logo.png';
import data from './../db/dbProfilePatient.json';

const PatientProfile = ({ title }) => {
  const dbData = [data],
    imgArr = [patient1, patient1, patient1];

  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <StylBoxPatients>
      <StylBoxRow>
        <img src={logo} alt='logo' />
        <StylBoxDoctor>
          <StylBoxFlexColumn>
            <StylTitleName>Larry Prinston</StylTitleName>
            <StylSubTitlePosition>Patient</StylSubTitlePosition>
          </StylBoxFlexColumn>
          <AvatarActive src={patient} alt='avatar-user' />
        </StylBoxDoctor>
      </StylBoxRow>
      <StylBoxPatientContent>
        <StylBoxBtnPatients>
          <BtnPatients active={false} text='Profile' />
          <BtnPatients active={true} text='Appointments  ' />
          <BtnPatientsHiddenMob active={false} text='Resolutions  ' />
        </StylBoxBtnPatients>
        <StylBoxRowPadding>
          <StylTitlePatients>My Appointments</StylTitlePatients>
          <StylBoxDoctor>
            <BoxFilter text='Show: ' filter='Upcoming' />
            <BtnCreateAppointment />
          </StylBoxDoctor>
        </StylBoxRowPadding>
        {!dbData.length ? (
          ''
        ) : (
          <CardProfilePatient
            dataPatients={dbData[0]}
            imgPatientsArr={imgArr}
          />
        )}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default PatientProfile;
