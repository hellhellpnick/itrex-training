import React, { useState, useEffect } from 'react';
import {
  StylBoxDoctor,
  StylBoxBtnPatients,
  BtnPatientsHiddenMob,
  BtnCreateAppointment,
  BtnPatients,
  CardPatientProfile,
  BoxFilter,
  StylBoxPatientContent,
  StylBoxRowPadding,
  StylTitlePatients,
  StylBoxPatientsList,
} from './../';
import heartImgSvg from './../../img/icons/icon-heart.svg';
import { getPatients } from '../../redux/patient/patientOperations';

const MainPatientsAppointment = ({ switchContent }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getPatients(0, 5).then((response) => setAppointments(response.data));
  }, []);

  return (
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
          <BtnCreateAppointment cliclChangeBox={switchContent} />
        </StylBoxDoctor>
      </StylBoxRowPadding>
      {!!appointments.length && (
        <StylBoxPatientsList>
          {appointments.map(
            ({ id, alt, name, status, statusText, data, info }) => (
              <CardPatientProfile
                key={id}
                imgIconDescription={heartImgSvg}
                alt={alt}
                name={name}
                status={status}
                statusText={statusText}
                data={data}
                info={info}
              />
            )
          )}
        </StylBoxPatientsList>
      )}
    </StylBoxPatientContent>
  );
};

export default MainPatientsAppointment;
