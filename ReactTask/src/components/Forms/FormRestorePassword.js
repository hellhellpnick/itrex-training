import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  StylInformationText,
  StylLinkPage,
  StylBoxViewContent,
  FormInput,
  InformationTextForm,
  TitleFormArrow,
  BtnSubmitForm,
  StylFormSign,
  StylTitleForm,
} from './../index';
import emailImgSvg from './../../img/icons/icon-email.svg';
import { regulEmail } from '../../constants';
import { routes } from '../../Router';

const FormRestorePassword = () => {
  const [isEmail, setEmail] = useState(false),
    [isHiddenForm, setHiddenForm] = useState(true);

  const handleForm = () => {
    setHiddenForm(!isHiddenForm);
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: '',
      }}
      validate={(values) => {
        !regulEmail.test(values.email) ? setEmail(true) : setEmail(false);
      }}
      onSubmit={(values, { validate, setSubmitting }) => {
        validate(values);
        setSubmitting(false);
        handleForm();
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>
            <TitleFormArrow path={routes.signInPage} />
            Restore password
          </StylTitleForm>

          <StylBoxViewContent view={isHiddenForm}>
            <InformationTextForm text='Please use your email address, and we’ll send you the link to reset your password' />
            <FormInput
              type='email'
              name='email'
              placeholder='Email'
              valueInput={values.email}
              imgStart={emailImgSvg}
              err={isEmail}
              errText='Email not correct. Please check the spelling'
              blur={handleBlur}
              changer={handleChange}
            />
            <BtnSubmitForm
              type='submit'
              disabled={isSubmitting}
              text='Send Reset Link'
            />
          </StylBoxViewContent>
          <StylBoxViewContent view={!isHiddenForm}>
            <StylInformationText>
              An email has been sent to{' '}
              <StylLinkPage>{values.email}</StylLinkPage>. Check your inbox, and
              click the reset link provided.
            </StylInformationText>
          </StylBoxViewContent>
        </StylFormSign>
      )}
    </Formik>
  );
};

export default FormRestorePassword;
