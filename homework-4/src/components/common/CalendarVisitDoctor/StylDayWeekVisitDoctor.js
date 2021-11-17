import styled from 'styled-components';

const StylDayWeekVisitDoctor = styled.p`
  width: 30px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    width: 48px;
  }
`;

export default StylDayWeekVisitDoctor;
