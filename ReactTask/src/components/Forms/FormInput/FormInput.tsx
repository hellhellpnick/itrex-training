import  { FunctionComponent, useState } from 'react';
import {
  LabelFromInput,
  BtnEyePassword,
  StylIconInputStart,
  StylWrapperFormInput,
  StylInputForm,
} from './index';
import { IFormInput } from '../../../modules/Forms.model';

const FormInput: FunctionComponent<IFormInput> = ({
  type,
  name,
  placeholder,
  imgStart,
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
        id={name}
        type={isType}
        name={name}
        placeholder={placeholder}
        className={(err && 'is-error-input') as string}
        value={valueInput}
        onChange={changer}
        err={err}
        onBlur={blur}
        data-testid={name}
        role={name}
      />
      {password && <BtnEyePassword changeEye={changeTypeInput} />}
      {err && <LabelFromInput text={errText} forLabel={name} />}
    </StylWrapperFormInput>
  );
};

export default FormInput;
