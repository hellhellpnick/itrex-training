import React from 'react';
import WrapperFormInput from './common/StylWrapperFormInput';
import IconInputStart from './common/StylIconInputStart';
import InputForm from './common/StylInputForm';
import BtnEyePassword from './BtnEyePassword';
import LabelFromInput from './LabelFromInput';

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
}) => {
  let [isType, setType] = React.useState(type);

  const changeTypeInput = () => {
    if (isType === 'text') {
      setType((isType = 'password'));
    } else {
      setType((isType = 'text'));
    }
  };

  return (
    <WrapperFormInput err={err}>
      <IconInputStart src={imgStart} />
      <InputForm
        type={isType}
        name={name}
        placeholder={placeholder}
        className={err ? 'is-error-input' : ''}
        value={valueInput}
        onChange={changer}
        err={err}
      />
      {password ? <BtnEyePassword func={changeTypeInput} /> : null}
      {err ? <LabelFromInput text={errText} /> : null}
    </WrapperFormInput>
  );
};

export default FormInput;
