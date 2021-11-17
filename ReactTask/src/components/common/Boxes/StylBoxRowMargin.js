import styled from 'styled-components';
import StylBoxRowPadding from './StylBoxRowPadding';

const StylBoxRowMargin = styled(StylBoxRowPadding)`
  margin: 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export default StylBoxRowMargin;
