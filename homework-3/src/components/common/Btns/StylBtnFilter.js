import styled from 'styled-components';
import StylBtnSearch from './StylBtnSearch';

const StylBtnFilter = styled(StylBtnSearch)`
  position: relative;
  margin: 0;
  @media (min-width: 1024px) {
    min-width: 160px;
  }
`;

export default StylBtnFilter;
