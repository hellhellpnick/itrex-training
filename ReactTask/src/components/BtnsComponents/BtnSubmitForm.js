import React from 'react';
import { StylBtnForm } from './../index';
import arrowRightSvg from './../../img/icons/icon-arrow-right-light.svg';

const BtnSubmitForm = ({ text, type }) => {
  return (
    <StylBtnForm imgWay={arrowRightSvg} type={type}>
      {text}
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
