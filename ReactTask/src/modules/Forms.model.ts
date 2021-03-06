import { ChangeEvent } from 'react';

export interface ISignIn {
  userName: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  firstName: string;
  lastName: string;
  checkPassword: string;
}

export interface IBtnEyePassowrd {
  changeEye: () => void;
}

export interface IFormInput {
  type: string;
  name: string;
  placeholder: string;
  imgStart: string;
  password?: boolean;
  err?: string;
  errText?: string;
  valueInput: string;
  changer: (event: ChangeEvent<HTMLInputElement>) => void;
  blur: (event: ChangeEvent<HTMLInputElement>) => void;
}
