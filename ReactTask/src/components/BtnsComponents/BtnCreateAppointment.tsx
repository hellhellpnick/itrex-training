import  { FunctionComponent } from 'react';
import styled from 'styled-components';
import plusImgSvg from './../../img/icons/icon-plus.svg';
import { IBtnCreateAppointment } from '../../modules/Btns.modle';

const Btn = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    cursor: pointer;
    position: relative;
    max-width: 250px;
    width: 100%;
    min-height: 40px;
    margin-left: 70px;
    padding: 15px 16px 15px 48px;
    font-size: 15px;
    font-weight: 600;
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.backgroundBtn.main};
    line-height: 130%;
    border-radius: 8px;
    box-shadow: 0px 4px 32px rgb(218 228 255 / 16%);
    border: none;
    outline: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(114, 151, 255, 0.5);
      color: ${(props) => props.theme.palette.main};
    }

    ::after {
      content: '';
      position: absolute;
      display: block;
      left: 20px;
      top: 50%;
      transform: translatey(-50%);
      background-image: url('${plusImgSvg}');
      width: 16px;
      height: 16px;
    }
  }
`;

const BtnCreateAppointment: FunctionComponent<IBtnCreateAppointment> = ({
  cliclChangeBox,
}) => {
  return <Btn onClick={cliclChangeBox}>Create an appointment</Btn>;
};

export default BtnCreateAppointment;