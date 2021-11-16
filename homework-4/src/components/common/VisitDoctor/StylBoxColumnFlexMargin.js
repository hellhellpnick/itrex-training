import styled from 'styled-components';
import { StylBoxColumnFlex } from '../Boxes';

const StylBoxColumnFlexMargin = styled(StylBoxColumnFlex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  opacity: ${(props) => (props.dataReady ? '1' : '0.8')};
  margin-bottom: 40px;
`;

export default StylBoxColumnFlexMargin;
