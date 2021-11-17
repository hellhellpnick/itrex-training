import styled, { css } from 'styled-components';
import StylDayWeekVisitDoctor from './StylDayWeekVisitDoctor';

const StylDayVisitDoctor = styled(StylDayWeekVisitDoctor)`
  cursor: pointer;
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  border-radius: 12px;

  &:hover {
    background-color: rgba(114, 151, 255, 0.5);
    color: ${(props) => props.theme.palette.main};
  }

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid ${(props) => props.theme.palette.backgroundBtn.main};
      color: ${(props) => props.theme.palette.text.second};
      box-sizing: border-box;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.palette.backgroundBtn.main};
      background-color: ${(props) => props.theme.palette.backgroundBtn.main};
      color: ${(props) => props.theme.palette.main};

      &:hover {
        color: ${(props) => props.theme.palette.main};
        background-color: ${(props) => props.theme.palette.backgroundBtn.main};
      }
    `}
`;

export default StylDayVisitDoctor;
