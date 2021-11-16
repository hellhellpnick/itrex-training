import styled from 'styled-components';
import StylTextData from './StylTextData';

const StylTextInfo = styled(StylTextData)`
  font-weight: ${(props) => props.theme.typography.textWeight.main};
`;

export default StylTextInfo;
