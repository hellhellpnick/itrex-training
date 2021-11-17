import styled from 'styled-components';

const StylElementSelectVisitDoctor = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.palette.main};
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  transition: all 0.2s ease;
  z-index: 1;

  :hover {
    background-color: ${(props) => props.theme.palette.primary};
  }
`;

export default StylElementSelectVisitDoctor;
