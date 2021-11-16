import styled from 'styled-components';
import StylTitlePatientAppointment from './StylTitlePatientAppointment';

const StylTitleCurrentPatientAppointment = styled(StylTitlePatientAppointment)`
  color: ${(props) => props.theme.palette.text.primary};
  margin-right: 0;

  &::after {
    display: none;
  }
`;

export default StylTitleCurrentPatientAppointment;
