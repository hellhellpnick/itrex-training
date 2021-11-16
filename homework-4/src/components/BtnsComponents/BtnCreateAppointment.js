import React from 'react';
import styled from 'styled-components';
import plusImg from './../../img/icons/plus.png';

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

    ::after {
      content: '';
      position: absolute;
      display: block;
      left: 20px;
      top: 50%;
      transform: translatey(-50%);
      background-image: url('${plusImg}');
      width: 16px;
      height: 16px;
    }
  }
`;

const BtnCreateAppointment = ({ cliclChangeBox }) => {
  return <Btn onClick={cliclChangeBox}>Create an appointment</Btn>;
};

export default BtnCreateAppointment;
