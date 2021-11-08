import React from 'react';
import { Formik, } from 'formik';
import TitleForm from './common/StylTitleForm';
import FormInput from './FormInput';
import FormSign from './common/StylFormSign';
import BtnSubmitFormSignIn from './BtnSubmitFormSignIn';
import emailImg from './../img/icons/icon-email.svg';
import passwordlImg from './../img/icons/icon-lock.svg';
import LinkPage from './LinkPage';

const FormSignUp = () => {
  let [isEmail, setEmail] = React.useState(false);
  let [isPassword, setPassword] = React.useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        const regulPassword = /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/;
        const regulEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regulPassword.test(values.password)) {
          setPassword((isPassword = true));
        } else {
          setPassword((isPassword = false));
        }

        if (!regulEmail.test(values.email)) {
          setEmail((isEmail = true));
        } else {
          setEmail((isEmail = false));
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit }) => (
        <FormSign onSubmit={handleSubmit}>
          <TitleForm>Sign in</TitleForm>

          <FormInput
            type='email'
            name='email'
            placeholder='Email'
            valueInput={values.email}
            imgStart={emailImg}
            err={isEmail}
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
          />
          <BtnSubmitFormSignIn
            type='submit'
            disabled={isSubmitting}
            text='Sign in'
          />

          <LinkPage path='/restorePassword' link='Forgot Password?'></LinkPage>
        </FormSign>
      )}
    </Formik>
  );
};

export default FormSignUp;
