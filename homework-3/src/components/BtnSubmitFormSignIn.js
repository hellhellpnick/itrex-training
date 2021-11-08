import React from 'react';
import StylBtnForm from './common/StylBtnForm';
import IconArrowBtn from './common/StylIconArrowBtn';
import styled from 'styled-components';

const BtnForm = styled(StylBtnForm)`
  margin-bottom: 32px;
`;

const BtnSubmitForm = ({ text }) => {
  return (
    <BtnForm>
      {text}
      <IconArrowBtn />
    </BtnForm>
  );
};

export default BtnSubmitForm;
