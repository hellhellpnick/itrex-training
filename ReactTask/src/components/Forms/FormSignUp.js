import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { BtnSubmitForm, StylTitleForm, FormInput } from './../';
import userImgSvg from './../../img/icons/icon-user.svg';
import emailImgSvg from './../../img/icons/icon-email.svg';
import passwordlImgSvg from './../../img/icons/icon-lock.svg';
import checkImgSvg from './../../img/icons/icon-check.svg';
import { regulEmail, regulPassword } from '../../constants';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { routes } from '../../Router';

const FormSignUp = () => {
  const { registerUser } = useActionsWithRedux();

  const history = useHistory();
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false),
    [isCheckPassowrd, setCheckPassowrd] = useState(false);

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        checkPassword: '',
      }}
      validate={(values) => {
        values.password !== values.checkPassword
          ? setCheckPassowrd(true)
          : setCheckPassowrd(false);

        !regulPassword.test(values.password)
          ? setPassword(true)
          : setPassword(false);

        !regulEmail.test(values.email) ? setEmail(true) : setEmail(false);
      }}
      onSubmit={(values) => {
        const obj = {
          userName: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        };
        registerUser(
          obj,
          () => {
            history.push({
              pathname: routes.patientProfile,
            });
          },
          () => {
            history.push({
              pathname: routes.signUpPage,
            });
          }
        );
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <StylTitleForm>Sign up</StylTitleForm>
          <FormInput
            type='text'
            name='firstName'
            valueInput={values.firstName}
            placeholder='First name'
            imgStart={userImgSvg}
            changer={handleChange}
            blur={handleBlur}
          />

          <FormInput
            type='text'
            name='lastName'
            placeholder='Last name'
            valueInput={values.lastName}
            imgStart={userImgSvg}
            changer={handleChange}
            blur={handleBlur}
          />

          <FormInput
            type='email'
            name='email'
            placeholder='Email'
            valueInput={values.email}
            imgStart={emailImgSvg}
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
            imgStart={passwordlImgSvg}
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
            imgStart={checkImgSvg}
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
