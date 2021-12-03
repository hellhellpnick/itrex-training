import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
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
import useActionsWithRedux from '../../hooks/useActionsWithRedux';

const FormSignUp = () => {
  const history = useHistory();
  const { loginUser } = useActionsWithRedux();

  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false);

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        userName: '',
        password: '',
      }}
      validate={(values) => {
        !regulPassword.test(values.password)
          ? setPassword(true)
          : setPassword(false);

        !regulEmail.test(values.userName) ? setEmail(true) : setEmail(false);
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        loginUser(
          values,
          () => {
            history.push({
              pathname: routes.patientProfile,
            });
          },
          () => {
            history.push({
              pathname: routes.signInPage,
            });
          }
        );
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>Sign in</StylTitleForm>

          <FormInput
            type='email'
            name='userName'
            placeholder='Email'
            valueInput={values.userName}
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
