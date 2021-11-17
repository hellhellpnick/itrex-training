import styled from 'styled-components';

const StylTitleVisitDoctor = styled.h3`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  margin-bottom: 16px;
`;

export default StylTitleVisitDoctor;
