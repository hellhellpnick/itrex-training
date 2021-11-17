import React, { useState } from 'react';
import { StylIconInputEnd } from './../index.js';
import visibleEyeImg from './../../img/icons/icon-visible-password.svg';
import closeEyeImg from './../../img/icons/icon-hidden-password.svg';
import BtnEyePasswordStyle from '../common/Btns/StylBtnEyePasswordStyle';

const BtnEyePassword = ({ changeEye }) => {
  const [isVisible, setVisible] = useState(true);

  const isVisiblePassword = () => {
    setVisible(!isVisible);
    changeEye();
  };

  return (
    <BtnEyePasswordStyle onClick={isVisiblePassword} type='button'>
      <StylIconInputEnd src={isVisible ? visibleEyeImg : closeEyeImg} />
    </BtnEyePasswordStyle>
  );
};

export default BtnEyePassword;
