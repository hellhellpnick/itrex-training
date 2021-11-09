import React from 'react';
import BoxRow from '../components/common/Boxes/StylBoxRow';
import BoxFilter from '../components/BoxFilter';
import BoxRowPadding from '../components/common/Boxes/StylBoxRowPadding';
import BoxPatients from '../components/common/Boxes/StylBoxPatients';
import BoxDoctor from '../components/common/Boxes/StylBoxDoctor';
import BoxFlexColumn from '../components/common/Boxes/StylBoxFlexColumn';
import BoxPatientContent from '../components/common/Boxes/StylBoxPatientContent';
import BoxBtnPatients from '../components/common/Boxes/StylBoxBtnPatients';
import BoxPatientsList from '../components/common/Boxes/StylBoxPatientsList';
import TitleName from '../components/common/Titles/StylTitleName';
import TitlePatients from '../components/common/Titles/StylTitlePatients';
import SubTitlePostion from '../components/common/Titles/StylSubTitlePosition';
import AvatarActive from '../components/AvatarActive';
import BtnPatients from '../components/BtnPatients';
import BtnCreateAppointment from './../components/BtnCreateAppointment';
import BtnPatientsHiddenMob from '../components/BtnPatientsHiddenMob';
import CardPatient from '../components/CardPatientProfilePatient/CardProfilePatient';

import patient from '../img/avatars/avatar-patient.png';
import avatar2 from '../img/avatars/patients-13.png';
import logo from '../img/logo.png';

const DoctorProfile = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <BoxPatients>
      <BoxRow>
        <img src={logo} alt='logo' />
        <BoxDoctor>
          <BoxFlexColumn>
            <TitleName>Larry Prinston</TitleName>
            <SubTitlePostion>Patient</SubTitlePostion>
          </BoxFlexColumn>
          <AvatarActive src={patient} alt='avatar-user' />
        </BoxDoctor>
      </BoxRow>
      <BoxPatientContent>
        <BoxBtnPatients>
          <BtnPatients active={false} text='Profile' />
          <BtnPatients active={true} text='Appointments  ' />
          <BtnPatientsHiddenMob active={false} text='Resolutions  ' />
        </BoxBtnPatients>
        <BoxRowPadding>
          <TitlePatients>My Appointments</TitlePatients>
          <BoxDoctor>
            <BoxFilter text='Show: ' filter='Upcoming' />
            <BtnCreateAppointment />
          </BoxDoctor>
        </BoxRowPadding>
        <BoxPatientsList>
          <CardPatient
            name='Jane Cooper'
            statusText='Therapist'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar2'
            img={avatar2}
            info='Headache, pant
          '
          />

          <CardPatient
            name='Jane Cooper'
            statusText='Therapist'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar2'
            img={avatar2}
            info='Headache, pant
          '
          />
        </BoxPatientsList>
      </BoxPatientContent>
    </BoxPatients>
  );
};

export default DoctorProfile;
