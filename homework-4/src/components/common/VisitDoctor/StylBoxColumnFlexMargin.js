import styled from 'styled-components';
import { StylBoxColumnFlex } from '../Boxes';

const StylBoxColumnFlexMargin = styled(StylBoxColumnFlex)`
  display: ${(props) => (props.dataReady ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-bottom: 40px;
`;

export default StylBoxColumnFlexMargin;
