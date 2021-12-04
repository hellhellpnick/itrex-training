import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    cursor: pointer;
    max-width: 160px;
    min-height: 40px;
    width: 100%;
    padding: 12px 0;
    font-size: 15px;
    font-weight: 600;
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) =>
      props.active
        ? props.theme.palette.main
        : props.theme.palette.text.second};
    background-color: ${(props) =>
      props.active
        ? props.theme.palette.backgroundBtn.main
        : props.theme.palette.main};
    line-height: 130%;
    border-radius: 8px;
    box-shadow: 0px 4px 32px rgb(218 228 255 / 16%);
    border: none;
    outline: none;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
      &:hover {
        background-color: rgba(114, 151, 255, 0.5);
        color: ${(props) => props.theme.palette.main};
      }
    }
  }
`;

const BtnPatientsHiddenMob = ({ text, active }) => {
  return <Btn active={active}>{text}</Btn>;
};

export default BtnPatientsHiddenMob;
