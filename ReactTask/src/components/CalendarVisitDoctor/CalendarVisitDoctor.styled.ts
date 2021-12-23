import styled, { css } from 'styled-components';

interface IStylBtnVisitDoctor {
  imgUrl: string;
}

interface IStylDayVisitDoctor {
  isToday: boolean;
  isSelected: boolean;
  isLastMonth?: boolean;
}

const StylBodyCalendarVisitDoctor = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StylBoxCalendar = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 40px 32px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  background-color: ${(props) => props.theme.palette.main};
`;

const StylBtnVisitDoctor = styled.button<IStylBtnVisitDoctor>`
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  top: 6px;
  width: 8px;
  height: 15px;
  background-color: transparent;
  background-image: url(${(props) => props.imgUrl});

  &:first-child {
    transform: rotate(180deg);
  }
`;

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

const StylDayVisitDoctor = styled(StylDayWeekVisitDoctor)<IStylDayVisitDoctor>`
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

    ${(props) =>
    props.isLastMonth &&
    css`
      pointer-events: none;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.palette.text.primary};

      &:hover {
        color: ${(props) => props.theme.palette.text.primary};
        background-color: transparent;
      }
    `}
`;

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
    left: -32px;
    height: 1px;
    width: calc(100% + 62px);
    background-color: ${(props) => props.theme.palette.border.main};
    background-repeat: no-repeat;
    z-index: 1;
  }
`;

export {
  StylBodyCalendarVisitDoctor,
  StylBoxCalendar,
  StylBtnVisitDoctor,
  StylDayVisitDoctor,
  StylDayWeekVisitDoctor,
  StylHeaderCalendarVisitDoctor,
};
