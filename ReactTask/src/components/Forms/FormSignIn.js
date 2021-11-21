import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  FormInput,
  LinkPage,
  BtnSubmitForm,
  StylFormSign,
  StylTitleForm,
} from '../';

import { routes } from './../../Router';
import emailImgSvg from './../../img/icons/icon-email.svg';
import passwordlImgSvg from './../../img/icons/icon-lock.svg';
import { regulEmail, regulPassword } from '../../constants';

const FormSignUp = () => {
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false);

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        !regulPassword.test(values.password)
          ? setPassword(true)
          : setPassword(false);

        !regulEmail.test(values.email) ? setEmail(true) : setEmail(false);
      }}
      onSubmit={(values, { validate, setSubmitting }) => {
        validate(values);
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>Sign in</StylTitleForm>

          <FormInput
            type='email'
            name='email'
            placeholder='Email'
            valueInput={values.email}
            imgStart={emailImgSvg}
            err={isEmail}
            blur={handleBlur}
            errText='
              Email not correct. Please check the spelling
            '
            changer={handleChange}
          />

          <FormInput
            type='password'
            name='password'
            valueInput={values.password}
            placeholder='Password'
            imgStart={passwordlImgSvg}
            password={true}
            err={isPassword}
            errText='Password contain unsupported characters'
            changer={handleChange}
            blur={handleBlur}
          />

          <BtnSubmitForm type='submit' disabled={isSubmitting} text='Sign in' />

          <LinkPage
            path={routes.restorePasswordPage}
            link='Forgot Password?'
          ></LinkPage>
        </StylFormSign>
      )}
    </Formik>
  );
};

export default FormSignUp;
