import React, { useEffect, useState } from 'react';
import { BoxFilter } from '../components/Boxes/';
import {
  StylBoxRowPadding,
  StylBoxPatients,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxPatientContent,
  StylBoxBtnPatients,
  StylBoxRow,
} from '../components/common/Boxes/';
import {
  StylSubTitlePosition,
  StylTitlePatients,
  StylTitleName,
} from '../components/common/Titles/';
import { AvatarActive } from '../components/';
import {
  BtnPatientsHiddenMob,
  BtnCreateAppointment,
  BtnPatients,
} from './../components/BtnsComponents/';
import { CardProfilePatient } from '../components/CardPatientProfilePatient';

import patient from '../img/avatars/avatar-patient.png';
import logo from '../img/logo.png';
import data from './../db/dbProfilePatient.json';

const DoctorProfile = ({ title }) => {
  const [dbData, setdbData] = useState([data]);

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
        {!dbData.length ? '' : <CardProfilePatient data={dbData} />}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default DoctorProfile;
