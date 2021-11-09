import React from 'react';
import BtnForm from './common/Btns/StylBtnForm';
import IconArrowBtn from './common/StylIconArrowBtn';

const BtnSubmitForm = ({ text }) => {
  return (
    <BtnForm>
      {text}
      <IconArrowBtn />
    </BtnForm>
  );
};

export default BtnSubmitForm;
