import styled from 'styled-components';

const StylTextFilterPatient = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  margin-bottom: 24px;
`;

export default StylTextFilterPatient;
