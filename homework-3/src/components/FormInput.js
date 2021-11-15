import React, { useState } from 'react';
import {
  LabelFromInput,
  BtnEyePassword,
  StylIconInputStart,
  StylWrapperFormInput,
  StylInputForm,
} from './index.js';

const FormInput = ({
  type,
  name,
  placeholder,
  imgStart = null,
  password = false,
  err = false,
  errText = '',
  valueInput,
  changer,
  blur,
}) => {
  let [isType, setType] = useState(type);

  const changeTypeInput = () => {
    if (isType === 'text') {
      setType((isType = 'password'));
    } else {
      setType((isType = 'text'));
    }
  };

  return (
    <StylWrapperFormInput err={err}>
      <StylIconInputStart src={imgStart} />
      <StylInputForm
        type={isType}
        name={name}
        placeholder={placeholder}
        className={err ? 'is-error-input' : ''}
        value={valueInput}
        onChange={changer}
        err={err}
        onBlur={blur}
      />
      {password ? <BtnEyePassword changeEye={changeTypeInput} /> : null}
      {err ? <LabelFromInput text={errText} /> : null}
    </StylWrapperFormInput>
  );
};

export default FormInput;
