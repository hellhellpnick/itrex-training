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
    isType === 'text'
      ? setType((isType = 'password'))
      : setType((isType = 'text'));
  };

  return (
    <StylWrapperFormInput err={err}>
      <StylIconInputStart src={imgStart} />
      <StylInputForm
        type={isType}
        name={name}
        placeholder={placeholder}
        className={err && 'is-error-input'}
        value={valueInput}
        onChange={changer}
        err={err}
        onBlur={blur}
      />
      {password && <BtnEyePassword changeEye={changeTypeInput} />}
      {err && <LabelFromInput text={errText} />}
    </StylWrapperFormInput>
  );
};

export default FormInput;
