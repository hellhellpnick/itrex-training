import {
  StylTitlePatientAppointment,
  StylTitleCurrentPatientAppointment,
  StylBoxRowFlexStart,
  StylBoxRowPadding,
  StylTitlePatients,
} from './../';

const HeaderCreateAppointment = ({setFilledData}) => {
  return (
    <>
      <StylBoxRowFlexStart>
        <StylTitlePatientAppointment>Doctor</StylTitlePatientAppointment>
        <StylTitleCurrentPatientAppointment>
          Make an appointment
        </StylTitleCurrentPatientAppointment>
      </StylBoxRowFlexStart>
      <StylBoxRowPadding>
        <StylTitlePatients>Make an appointment</StylTitlePatients>
      </StylBoxRowPadding>
    </>
  );
};

export default HeaderCreateAppointment;
