import React, { useEffect } from 'react';
import { BoxFilter, BoxSearch } from './../components/Boxes';

import {
  StylBoxBtnPatients,
  StylBoxPatientContent,
  StylBoxFlexColumn,
  StylBoxDoctor,
  StylBoxPatients,
  StylBoxRowPadding,
  StylBoxRow,
  StylSubTitlePosition,
  StylTitlePatients,
  StylTitleName,
  AvatarActive,
  BtnPatients,
  CardPatientProfileDoctor,
} from '../components/';

import avatar1 from '../img/avatars/avatar-doctor.png';
import patients1 from '../img/avatars/patients-1.png';
import patients2 from '../img/avatars/patients-2.png';
import patients3 from '../img/avatars/patients-3.png';
import patients4 from '../img/avatars/patients-4.png';
import patients5 from '../img/avatars/patients-5.png';
import patients6 from '../img/avatars/patients-6.png';
import patients7 from '../img/avatars/patients-7.png';
import patients8 from '../img/avatars/patients-8.png';
import patients9 from '../img/avatars/patients-9.png';
import patients10 from '../img/avatars/patients-10.png';
import patients11 from '../img/avatars/patients-11.png';
import patients12 from '../img/avatars/patients-12.png';
import logo from '../img/logo.png';
import data from './../db/dbProfileDoctor.json';

const DoctorProfile = ({ title }) => {
  const dbData = [data],
    imgArr = [
      patients1,
      patients2,
      patients3,
      patients4,
      patients5,
      patients6,
      patients7,
      patients8,
      patients9,
      patients10,
      patients11,
      patients12,
    ];

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
        {!dbData.length ? (
          ''
        ) : (
          <CardPatientProfileDoctor
            dataPatients={dbData[0]}
            imgPatientsArr={imgArr}
          />
        )}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default DoctorProfile;
