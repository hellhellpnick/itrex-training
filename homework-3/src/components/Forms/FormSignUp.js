import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { StylTitleForm } from '../common/Titles/';
import { FormInput } from '../';
import { BtnSubmitForm } from '../BtnsComponents/';
import userImg from './../../img/icons/icon-user.svg';
import emailImg from './../../img/icons/icon-email.svg';
import passwordlImg from './../../img/icons/icon-lock.svg';
import checkImg from './../../img/icons/icon-check.svg';
import { regulEmail, regulPassword } from '../../constants';

const FormSignUp = () => {
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false),
    [isCheckPassowrd, setCheckPassowrd] = useState(false);

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
        if (values.password !== values.checkPassword) {
          setCheckPassowrd(true);
        } else {
          setCheckPassowrd(false);
        }

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
        <Form onSubmit={handleSubmit}>
          <StylTitleForm>Sign up</StylTitleForm>
          <FormInput
            type='text'
            name='firstName'
            valueInput={values.firstName}
            placeholder='First name'
            imgStart={userImg}
            changer={handleChange}
            blur={handleBlur}
          />

          <FormInput
            type='text'
            name='lastName'
            placeholder='Last name'
            valueInput={values.lastName}
            imgStart={userImg}
            changer={handleChange}
            blur={handleBlur}
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
            blur={handleBlur}
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
            blur={handleBlur}
          />
          <BtnSubmitForm type='submit' disabled={isSubmitting} text='Sign up' />
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
