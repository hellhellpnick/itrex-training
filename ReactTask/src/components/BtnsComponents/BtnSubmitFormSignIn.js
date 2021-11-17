import React from 'react';
import styled from 'styled-components';
import { StylBtnForm } from './../common/Btns/';
import { StylIconArrowBtn } from './../common/icons/';

const BtnForm = styled(StylBtnForm)`
  margin-bottom: 32px;
`;

const BtnSubmitForm = ({ text }) => {
  return (
    <BtnForm>
      {text}
      <StylIconArrowBtn />
    </BtnForm>
  );
};

export default BtnSubmitForm;
