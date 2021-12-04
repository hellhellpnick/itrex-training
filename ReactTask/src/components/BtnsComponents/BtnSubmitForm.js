import React from 'react';
import { StylBtnForm } from './../index';
import arrowRightSvg from './../../img/icons/icon-arrow-right-light.svg';

const BtnSubmitForm = ({ text, type, role }) => {
  return (
    <StylBtnForm imgWay={arrowRightSvg} type={type} role={role}>
      {text}
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
