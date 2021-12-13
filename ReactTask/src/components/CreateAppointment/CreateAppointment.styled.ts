import styled, { css } from 'styled-components';

interface IStylArrowVisitDoctor {
  focusSelect: boolean;
}

interface IStylBoxColumnFlexMargin {
  dataReady: boolean;
}

interface IStylBoxMenuSelectVisitDoctor {
  focusSelect: boolean;
}

interface IStylBtnChooseTimeVisitDoctor {
  isSelected?: boolean;
  isDisabled?: boolean;
}

interface IStylBtnSubmitFormVisitDoctor {
  isDisabled: boolean;
}

interface IStylItemChooseDoctor {
  contentText: string;
}

const StylArrowVisitDoctor = styled.span<IStylArrowVisitDoctor>`
  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 24px;
    transform: ${(props) =>
      props.focusSelect
        ? 'translateY(-50%) rotate(-225deg)'
        : 'translateY(-50%) rotate(-45deg)'};
    width: 8px;
    height: 8px;
    border-top: 1px solid
      ${(props) =>
        props.focusSelect
          ? props.theme.palette.backgroundBtn.main
          : props.theme.palette.border.main};
    border-right: 1px solid
      ${(props) =>
        props.focusSelect
          ? props.theme.palette.backgroundBtn.main
          : props.theme.palette.border.main};
    transition: all 0.2s ease;
    z-index: 1;
  }
`;

const StylBoxChooseTime = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 40px;
  height: 150px;
  width: 320px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    width: auto;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const StylBoxColumnFlexMargin = styled.div<IStylBoxColumnFlexMargin>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;

  pointer-events: ${(props) => (props.dataReady ? 'auto' : 'none')};
  opacity: ${(props) => (props.dataReady ? '1' : '0.5')};
  margin-bottom: 40px;
`;

const StylBoxMenuSelectVisitDoctor = styled.ul<IStylBoxMenuSelectVisitDoctor>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  display: ${(props) => (props.focusSelect ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 620px;
  max-height: 130px;
  width: 100%;
  list-style: none;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 4px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 1;

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(220, 224, 236, 0.3);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.border.main};
    border-radius: 8px;
    opacity: 0.3;
  }
`;

const StylBtnChooseTimeVisitDoctor = styled.button<IStylBtnChooseTimeVisitDoctor>`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
  padding: 8px 16px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.main};
  border: 1px solid transparent;
  transition: all 0.2s ease;
  margin-right: 16px;
  margin-bottom: 16px;
  max-width: 115px;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.palette.backgroundBtn.main};
      background-color: ${(props) => props.theme.palette.main};
      color: ${(props) => props.theme.palette.text.second};

      &:hover {
        background-color: ${(props) => props.theme.palette.main};
        color: ${(props) => props.theme.palette.text.second};
      }
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
      color: ${(props) => props.theme.palette.main};

      &:hover {
        background-color: ${(props) =>
          props.theme.palette.backgroundColor.primary};
        color: ${(props) => props.theme.palette.main};
      }
    `}
`;

const StylBtnSubmitFormVisitDoctor = styled.button<IStylBtnSubmitFormVisitDoctor>`
  cursor: pointer;
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
  padding: 8px 16px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  transition: all 0.2s ease;
  border: none;
  outline: none;
  padding: 16px;
  max-width: 160px;
  width: 100%;

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
      color: ${(props) => props.theme.palette.main};
    `}
`;

const StylChooseDateAndTimeVisitDoctor = styled.ul`
  counter-reset: myCounter;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

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
const StylInputVisitDoctor = styled.input`
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 16px 24px;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  border: 1px solid ${(props) => props.theme.palette.border.main};
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  overflow: hidden;

  &:focus {
    border-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  &::placeholder-shown {
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }

  &::placeholder {
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }
`;

const StylItemChooseDoctor = styled.li<IStylItemChooseDoctor>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding-top: 70px;
  list-style: none;
  min-width: 280px;
  max-width: 280px;
  margin-right: 20px;

  &:first-child {
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 728px) {
    max-width: 550px;
    justify-content: flex-start;
  }

  @media (min-width: 1024) {
    max-width: 640px;
  }

  &::before {
    counter-increment: myCounter;
    content: counter(myCounter);
    position: absolute;
    top: 0;
    display: inline-block;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    line-height: 130%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.palette.text.primary};
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
  }

  ::after {
    position: absolute;
    content: '${(props) => props.contentText}';
    height: 32px;
    width: 100%;
    display: inline-block;
    text-align: left;
    top: 5px;
    left: 48px;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }
`;

const StylOptionVisitDoctor = styled.option`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StylTitleVisitDoctor = styled.h3`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  margin-bottom: 16px;
`;

export {
  StylArrowVisitDoctor,
  StylBoxChooseTime,
  StylBoxColumnFlexMargin,
  StylBoxMenuSelectVisitDoctor,
  StylBtnChooseTimeVisitDoctor,
  StylChooseDateAndTimeVisitDoctor,
  StylElementSelectVisitDoctor,
  StylItemChooseDoctor,
  StylBtnSubmitFormVisitDoctor,
  StylInputVisitDoctor,
  StylOptionVisitDoctor,
  StylTitleVisitDoctor,
};
