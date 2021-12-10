import { ChangeEvent } from 'react';

export interface ISignIn {
  userName: string;
  password: string;
}

export interface ISignUp {
  userName: string;
  password: string;
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
  err?: boolean;
  errText?: string;
  valueInput: string;
  changer: (event: ChangeEvent<HTMLInputElement>) => void;
  blur: (event: ChangeEvent<HTMLInputElement>) => void;
}
