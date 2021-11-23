import React, { useState } from 'react';
import { StylIconInputEnd, StylBtnEyePasswordStyle } from './index.js';
import visibleEyeImgSvg from './../../../img/icons/icon-visible-password.svg';
import closeEyeImgSvg from './../../../img/icons/icon-hidden-password.svg';

const BtnEyePassword = ({ changeEye }) => {
  const [isVisible, setVisible] = useState(true);

  const isVisiblePassword = () => {
    setVisible(!isVisible);
    changeEye();
  };

  return (
    <StylBtnEyePasswordStyle onClick={isVisiblePassword} type='button'>
      <StylIconInputEnd src={isVisible ? visibleEyeImgSvg : closeEyeImgSvg} />
    </StylBtnEyePasswordStyle>
  );
};

export default BtnEyePassword;
