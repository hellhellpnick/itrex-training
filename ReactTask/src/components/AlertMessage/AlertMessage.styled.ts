import styled, { css } from 'styled-components';
import iconSuccessSvg from './../../img/icons/icon-success.svg';
import iconWarningSvg from './../../img/icons/icon-warning.svg';
import iconCloseSvg from './../../img/icons/icon-close.svg';

interface IStylBoxAlert {
  showMessage: boolean;
  err?: boolean;
}

const StylBoxAlert = styled.div<IStylBoxAlert>`
  position: fixed;
  left: 32px;
  bottom: 32px;
  display: ${(props) => (props.showMessage ? 'flex' : 'none')};
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 24px 56px 32px 72px;
  border-radius: 8px;
  max-width: 450px;
  background-color: ${(props) => props.theme.palette.backgroundColor.second};
  z-index: 10;

  &:after {
    content: '';
    position: absolute;
    top: 28px;
    left: 28px;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${iconSuccessSvg});
  }

  &:before {
    content: '';
    cursor: pointer;
    position: absolute;
    top: 28px;
    right: 28px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${iconCloseSvg});
  }

  ${(props) =>
    props.err &&
    css`
      background-color: ${(props) => props.theme.palette.error.background};

      &:after {
        background-image: url(${iconWarningSvg});
      }
    `}
`;
const StylSubTitleAlert = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 8p;
`;
const StylTextAlert = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
`;

export { StylBoxAlert, StylSubTitleAlert, StylTextAlert };
