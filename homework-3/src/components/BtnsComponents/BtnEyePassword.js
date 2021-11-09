import React from 'react';
import styled from 'styled-components';
import IconInputEnd from './../common/icons/StylIconInputEnd';
import visibleEyeImg from './../../img/icons/icon-visible-password.svg';
import closeEyeImg from './../../img/icons/icon-hidden-password.svg';

const BtnEyePasswordStyle = styled.button`
  position: absolute;
  right: 26px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease;
  z-index: 1;
`;

const BtnEyePassword = ({ func }) => {
  const [isVisible, setVisible] = React.useState(true);

  const isVisiblePassword = () => {
    setVisible(!isVisible);
    func();
  };

  return (
    <BtnEyePasswordStyle onClick={isVisiblePassword} type='button'>
      <IconInputEnd src={isVisible ? visibleEyeImg : closeEyeImg} />
    </BtnEyePasswordStyle>
  );
};

export default BtnEyePassword;
