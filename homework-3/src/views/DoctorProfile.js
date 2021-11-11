import React, { useEffect, useState } from 'react';
import { BoxFilter, BoxSearch } from './../components/Boxes';

import {
  StylBoxBtnPatients,
  StylBoxPatientContent,
  StylBoxFlexColumn,
  StylBoxDoctor,
  StylBoxPatients,
  StylBoxRowPadding,
  StylBoxRow,
} from '../components/common/Boxes/';

import {
  StylSubTitlePosition,
  StylTitlePatients,
  StylTitleName,
} from '../components/common/Titles/';

import { AvatarActive } from '../components/';
import { BtnPatients } from './../components/BtnsComponents/';
import { CardPatient } from '../components/CardPatientProfileDoctor/';

import avatar1 from '../img/avatars/avatar-doctor.png';
import logo from '../img/logo.png';
import data from './../db/dbProfileDoctor.json';

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
            <StylTitleName>Alla Robins</StylTitleName>
            <StylSubTitlePosition>Doctor</StylSubTitlePosition>
          </StylBoxFlexColumn>
          <AvatarActive src={avatar1} alt='avatar-user' />
        </StylBoxDoctor>
      </StylBoxRow>
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
        {!dbData.length ? '' : <CardPatient data={dbData} />}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default DoctorProfile;
