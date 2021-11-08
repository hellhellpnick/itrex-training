import React from 'react';
import { Formik, Form, } from 'formik';
import TitleForm from './common/StylTitleForm';
import FormInput from './FormInput';
import BtnSubmitForm from './BtnSubmitForm';
import userImg from './../img/icons/icon-user.svg';
import emailImg from './../img/icons/icon-email.svg';
import passwordlImg from './../img/icons/icon-lock.svg';
import checkImg from './../img/icons/icon-check.svg';

const FormSignUp = () => {
  let [isEmail, setEmail] = React.useState(false);
  let [isPassword, setPassword] = React.useState(false);
  let [isCheckPassowrd, setCheckPassowrd] = React.useState(false);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        checkPassword: '',
      }}
      validate={(values) => {
        const errors = {};
        const regulPassword = /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/;
        const regulEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (values.password !== values.checkPassword) {
          setCheckPassowrd((isCheckPassowrd = true));
        } else {
          setCheckPassowrd((isCheckPassowrd = false));
        }

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
        <Form onSubmit={handleSubmit}>
          <TitleForm>Sign up</TitleForm>
          <FormInput
            type='text'
            name='firstName'
            valueInput={values.firstName}
            placeholder='First name'
            imgStart={userImg}
            changer={handleChange}
          />

          <FormInput
            type='text'
            name='lastName'
            placeholder='Last name'
            valueInput={values.lastName}
            imgStart={userImg}
            changer={handleChange}
          />

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

          <FormInput
            type='password'
            name='checkPassword'
            valueInput={values.checkPassword}
            placeholder='Password'
            imgStart={checkImg}
            password={true}
            err={isCheckPassowrd}
            errText='Password does not match'
            changer={handleChange}
          />
          <BtnSubmitForm type='submit' disabled={isSubmitting} text='Sign up' />
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
