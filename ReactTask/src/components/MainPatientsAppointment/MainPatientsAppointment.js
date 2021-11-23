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
} from './../';
import heartImgSvg from './../../img/icons/icon-heart.svg';
import dataPatient from './../../db/dbProfilePatient.json';

const MainPatientsAppointment = ({ switchContent }) => {
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
      {!!dataPatient.length && (
        <CardPatientProfile
          dataPatients={dataPatient}
          imgPatientsArr={'imgArr'}
          imgIconDescription={heartImgSvg}
        />
      )}
    </StylBoxPatientContent>
  );
};

export default MainPatientsAppointment;
