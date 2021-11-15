import React, { useState } from 'react';
import { Formik } from 'formik';
import { StylTitleForm } from '../common/Titles/';
import { StylFormSign } from '../common/partsOfTheForm/';
import { BtnSubmitFormSignIn } from './../BtnsComponents/';
import { FormInput, LinkPage } from '../';
import { routes } from './../../Router';
import emailImg from './../../img/icons/icon-email.svg';
import passwordlImg from './../../img/icons/icon-lock.svg';
import { regulEmail, regulPassword } from '../../constants';

const FormSignUp = () => {
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        if (!regulPassword.test(values.password)) {
          setPassword(true);
        } else {
          setPassword(false);
        }

        if (!regulEmail.test(values.email)) {
          setEmail(true);
        } else {
          setEmail(false);
        }
      }}
      onSubmit={({ setSubmitting }) => {
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
            imgStart={emailImg}
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
            imgStart={passwordlImg}
            password={true}
            err={isPassword}
            errText='Password contain unsupported characters'
            changer={handleChange}
            blur={handleBlur}
          />
          <BtnSubmitFormSignIn
            type='submit'
            disabled={isSubmitting}
            text='Sign in'
          />

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
