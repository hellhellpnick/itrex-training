import React, { useEffect } from 'react';
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
} from '../components/';

import avatar1 from '../img/avatars/avatar-doctor.png';
import scheduleImgSvg from './../img/icons/icon-shedule.svg';
import dataProfileDoctor from './../db/dbProfileDoctor.json';

const DoctorProfile = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <StylBoxPatients>
      <HeaderProfile
        firstName={'Larry'}
        lastName='Robbinson'
        position='Doctor'
        isOnline={true}
        wayToImg={avatar1}
      />

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
        {!!dataProfileDoctor.length && (
          <CardPatientProfile
            dataPatients={dataProfileDoctor}
            imgIconDescription={scheduleImgSvg}
          />
        )}
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default DoctorProfile;
