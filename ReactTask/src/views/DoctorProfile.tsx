import { FunctionComponent, useEffect, useState } from 'react';
import { BoxFilter, BoxSearch } from '../components/Boxes';

import {
  StylBoxBtnPatients,
  StylBoxPatientContent,
  StylBoxDoctor,
  StylBoxPatients,
  StylBoxRowPadding,
  StylTitlePatients,
  BtnPatients,
  CardDoctorProfile,
  HeaderProfile,
  StylBoxPatientsList,
} from '../components';

import avatarDoctorImg from '../assets/avatars/avatar-doctor.png';
import scheduleImgSvg from './../assets/icons/icon-shedule.svg';
import { getDoctors } from '../redux/doctor/doctorOperation';
import useActionsWithRedux from '../hooks/useActionsWithRedux';
import { routes } from '../Router';

interface IDoctorProfile {
  title: string;
}

const DoctorProfile: FunctionComponent<IDoctorProfile> = ({ title }) => {
  const [isAppointments, setAppointments] = useState([]);
  const { profile } = useActionsWithRedux();

  useEffect(() => {
    document.title = title || '';

    getDoctors().then((response) =>
      setAppointments(response.data.appointments)
    );
  }, [title, profile]);

  return (
    <StylBoxPatients>
      <HeaderProfile avatar={avatarDoctorImg} />

      <StylBoxPatientContent>
        <StylBoxBtnPatients>
          <BtnPatients text='Patients' path={routes.patientsDoctor} />
          <BtnPatients text='Resolutions ' path='*' />
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
                <CardDoctorProfile
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
