import styled from 'styled-components';
import StylBoxRow from './StylBoxRow';

const StylBoxRowPadding = styled(StylBoxRow)`
  padding: 0;
  align-items: center;

  @media (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

export default StylBoxRowPadding;
