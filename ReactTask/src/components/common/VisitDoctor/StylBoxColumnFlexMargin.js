import styled from 'styled-components';
import { StylBoxColumnFlex } from '../Boxes';

const StylBoxColumnFlexMargin = styled(StylBoxColumnFlex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;

  pointer-events: ${(props) => (props.dataReady ? 'auto' : 'none')};
  opacity: ${(props) => (props.dataReady ? '1' : '0.5')};
  margin-bottom: 40px;
`;

export default StylBoxColumnFlexMargin;
