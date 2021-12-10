import React, { FunctionComponent, useState } from 'react';
import { StylIconInputEnd, StylBtnEyePasswordStyle } from './index';
import visibleEyeImgSvg from './../../../img/icons/icon-visible-password.svg';
import closeEyeImgSvg from './../../../img/icons/icon-hidden-password.svg';
import { IBtnEyePassowrd } from '../../../modules/Forms.modules';

const BtnEyePassword: FunctionComponent<IBtnEyePassowrd> = ({ changeEye }) => {
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
