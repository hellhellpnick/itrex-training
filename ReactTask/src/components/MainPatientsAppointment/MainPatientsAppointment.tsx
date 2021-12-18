import { useState, useEffect, FunctionComponent } from 'react';
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
} from '..';
import heartImgSvg from './../../img/icons/icon-heart.svg';
import { getPatients } from '../../redux/patient/patientOperations';
import { IMainPatientsAppointment } from '../../modules/MainPatientsAppointment.model';
import { routes } from '../../Router';

const MainPatientsAppointment: FunctionComponent<IMainPatientsAppointment> =
  () => {
    const [isAppointments, setAppointments] = useState([]);

    useEffect(() => {
      getPatients().then((response) =>
        setAppointments(response.data.appointments)
      );
    }, []);

    return (
      <StylBoxPatientContent>
        <StylBoxBtnPatients>
          <BtnPatients active={false} text='Profile' path={routes.profile} />
          <BtnPatients
            active={true}
            text='Appointments '
            path={routes.patientProfile}
          />
          <BtnPatientsHiddenMob
            active={false}
            text='Resolutions'
            path={routes.patientResolution}
          />
        </StylBoxBtnPatients>
        <StylBoxRowPadding>
          <StylTitlePatients>My Appointments</StylTitlePatients>
          <StylBoxDoctor>
            <BoxFilter text='Show: ' filter='Upcoming' />
            <BtnCreateAppointment />
          </StylBoxDoctor>
        </StylBoxRowPadding>
        {!!isAppointments.length && (
          <StylBoxPatientsList>
            {isAppointments.map((item, index) => {
              return (
                <CardPatientProfile
                  key={index}
                  item={item}
                  imgIconDescription={heartImgSvg}
                />
              );
            })}
          </StylBoxPatientsList>
        )}
      </StylBoxPatientContent>
    );
  };

export default MainPatientsAppointment;
