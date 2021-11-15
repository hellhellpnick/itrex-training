import React from 'react';
import { StylBtnForm, StylIconArrowBtn } from './../index';

const BtnSubmitForm = ({ text }) => {
  return (
    <StylBtnForm>
      {text}
      <StylIconArrowBtn />
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
