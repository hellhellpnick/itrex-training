import React from 'react';
import BoxRow from '../components/common/Boxes/StylBoxRow';
import BoxSearch from '../components/BoxSearch';
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
import CardPatient from '../components/CardPatientProfileDoctor/CardPatient';

import avatar1 from '../img/avatars/avatar-doctor.png';
import avatar2 from '../img/avatars/patients-1.png';
import avatar3 from '../img/avatars/patients-2.png';
import avatar4 from '../img/avatars/patients-3.png';
import avatar5 from '../img/avatars/patients-4.png';
import avatar6 from '../img/avatars/patients-5.png';
import avatar7 from '../img/avatars/patients-6.png';
import avatar8 from '../img/avatars/patients-7.png';
import avatar9 from '../img/avatars/patients-8.png';
import avatar10 from '../img/avatars/patients-9.png';
import avatar11 from '../img/avatars/patients-10.png';
import avatar12 from '../img/avatars/patients-11.png';
import avatar13 from '../img/avatars/patients-12.png';
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
            <TitleName>Alla Robins</TitleName>
            <SubTitlePostion>Doctor</SubTitlePostion>
          </BoxFlexColumn>
          <AvatarActive src={avatar1} alt='avatar-user' />
        </BoxDoctor>
      </BoxRow>
      <BoxPatientContent>
        <BoxBtnPatients>
          <BtnPatients active={true} text='Patients' />
          <BtnPatients active={false} text='Resolutions  ' />
        </BoxBtnPatients>
        <BoxRowPadding>
          <TitlePatients>My patients</TitlePatients>
          <BoxDoctor>
            <BoxSearch />
            <BoxFilter text="Sort by:" filter='Date'/>
          </BoxDoctor>
        </BoxRowPadding>
        <BoxPatientsList>
          <CardPatient
            name='Jane Cooper'
            statusText='Appointment is confirmed'
            status='success'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar2'
            img={avatar2}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Eleanor Pena'
            statusText='Appointment is confirmed'
            status='success'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar3'
            img={avatar3}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Devon Lane'
            statusText='Appointment is confirmed'
            status='success'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar4'
            img={avatar4}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Jenny Wilson'
            statusText='Appointment is confirmed'
            status='success'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar5'
            img={avatar5}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Courtney Henry'
            statusText='Appointment is confirmed'
            status='success'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar6'
            img={avatar6}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Arlene McCoy'
            statusText='Appointment is canceled'
            status='cancel'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar7'
            img={avatar7}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Annette Black'
            statusText='Waiting for confirmation...'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar8'
            img={avatar8}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Cameron Williamson'
            statusText='Appointment is confirmed'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar9'
            img={avatar9}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Bessie Cooper'
            statusText='Appointment is confirmed'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar10'
            img={avatar10}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Savannah Nguyen'
            statusText='Appointment is confirmed'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar11'
            img={avatar11}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Esther Howard'
            statusText='Appointment is confirmed'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar12'
            img={avatar12}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />

          <CardPatient
            name='Jerome Bell'
            statusText='Appointment is confirmed'
            status='wait'
            data='Thu Sept 10, 2021 4 pm – 5 pm'
            alt='avatar13'
            img={avatar13}
            info='
            We will invite you in for a full review every year and more frequently if you
            are struggling with blood sugar levels
          '
          />
        </BoxPatientsList>
      </BoxPatientContent>
    </BoxPatients>
  );
};

export default DoctorProfile;
