import styled from 'styled-components';
import StylSubTitleCard from '../CardPatientProfileDoctor/StylSubTitleCard';

const StylSubTitleCardPatient = styled(StylSubTitleCard)`
  padding: 0;
  align-self: flex-start;

  ::after {
    display: none;
  }
`;

export default StylSubTitleCardPatient;
