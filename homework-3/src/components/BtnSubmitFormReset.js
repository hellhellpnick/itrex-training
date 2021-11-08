import React from 'react';
import IconArrowBtn from './common/StylIconArrowBtn';
import styled from 'styled-components';
import StylBtnForm from './common/StylBtnForm';

const BtnForm = styled(StylBtnForm)`
  max-width: 198px;
`;

const BtnSubmitFormReset = ({ text }) => {
  return (
    <BtnForm>
      {text}
      <IconArrowBtn />
    </BtnForm>
  );
};

export default BtnSubmitFormReset;
