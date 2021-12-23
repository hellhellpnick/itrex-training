import styled from 'styled-components';

interface IStylSubTitleCard {
  status: string;
}

interface IStylBoxMenuCard {
  showMore: boolean;
}

interface IStylBtnChooseAction {
  err?: boolean;
}

const StylBoxRowLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  padding: 0;

  ::after {
    position: absolute;
    bottom: -14px;
    left: -24px;
    content: '';
    width: calc(100% + 40px);
    border-bottom: 1px solid ${(props) => props.theme.palette.border.main};

    @media (min-width: 1024px) {
      left: -32px;
      width: calc(100% + 64px);
    }
  }

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 22px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 48px;

    ::after {
      bottom: -24px;
    }
  }
`;

const StylBoxColumnInfo = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: nowrap;
  display: flex;

  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

const StylBoxCardPatient = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  min-width: 270px;
  width: 100%;
  background: ${(props) => props.theme.palette.main};
  box-shadow: 0px 4px 32px rgb(218 228 255 / 24%);
  border-radius: 12px;
  padding: 24px 16px 24px 24px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    max-width: 350px;
    padding: 32px;
    margin-right: 20px;
  }
`;
const StylBoxImgPatient = styled.img`
  position: relative;
  top: 5px;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
`;

const StylSubTitleCard = styled.h2<IStylSubTitleCard>`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  line-height: 130%;
  align-self: ${(props) => !props.status && 'flex-start'};
  max-width: 160px;
  padding-left: ${(props) => props.status && '16px'};
  align-self: flex-start;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.status === 'confirmed'
        ? props.theme.palette.backgroundColor.second
        : props.status === 'canceled'
        ? props.theme.palette.error.text
        : props.status === 'waiting'
        ? props.theme.palette.text.second
        : ''};
  }

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const StylTitleCard = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 130%;
  margin-bottom: 4px;
  align-self: flex-start;
`;

const StylBoxMenuCard = styled.div<IStylBoxMenuCard>`
  position: absolute;
  display: ${(props) => (props.showMore ? 'flex' : 'none')};
  right: 0;
  top: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 272px;
  padding: 4px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 2;
`;

const StylBtnChooseAction = styled.button<IStylBtnChooseAction>`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.palette.main};
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  font-size: ${(props) => props.theme.typography.textSmall.primey};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) =>
    props.err ? props.theme.palette.error.text : props.theme.palette.text.main};
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
    }
  }
`;

export {
  StylBtnChooseAction,
  StylBoxMenuCard,
  StylTitleCard,
  StylBoxRowLine,
  StylBoxColumnInfo,
  StylBoxCardPatient,
  StylBoxImgPatient,
  StylSubTitleCard,
};
