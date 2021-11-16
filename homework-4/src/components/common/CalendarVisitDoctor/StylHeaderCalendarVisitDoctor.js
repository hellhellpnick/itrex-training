import styled from 'styled-components';

const StylHeaderCalendarVisitDoctor = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  margin-bottom: 16px;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -40px;
    height: 1px;
    width: calc(100% + 80px);
    background-color: ${(props) => props.theme.palette.border.main};
    background-repeat: no-repeat;
    z-index: 1;
  }
`;

export default StylHeaderCalendarVisitDoctor;
