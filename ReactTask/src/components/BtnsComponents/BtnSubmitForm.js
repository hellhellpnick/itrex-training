import React from 'react';
import { StylBtnForm } from './../index';
import arrowRightSvg from './../../img/icons/icon-arrow-right-light.svg';

const BtnSubmitForm = ({ text }) => {
  return (
    <StylBtnForm imgWay={arrowRightSvg}>
      {text}
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
