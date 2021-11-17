import styled from 'styled-components';

const StylTitlePatients = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 24px;
`;

export default StylTitlePatients;
