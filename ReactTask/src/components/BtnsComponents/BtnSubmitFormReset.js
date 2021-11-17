import React from 'react';
import { StylIconArrowBtn } from './../common/icons/';
import styled from 'styled-components';
import { StylBtnForm } from './../common/Btns/';

const BtnForm = styled(StylBtnForm)`
  max-width: 198px;
`;

const BtnSubmitFormReset = ({ text }) => {
  return (
    <BtnForm>
      {text}
      <StylIconArrowBtn />
    </BtnForm>
  );
};

export default BtnSubmitFormReset;
