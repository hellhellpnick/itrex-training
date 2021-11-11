import React from 'react';
import { StylBtnForm } from './../common/Btns/';
import IconArrowBtn from './../common/icons/StylIconArrowBtn';

const BtnSubmitForm = ({ text }) => {
  return (
    <StylBtnForm>
      {text}
      <IconArrowBtn />
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
