import React, { useState } from 'react';
import { Formik } from 'formik';
import { StylTitleForm } from '../common/Titles/';
import { StylFormSign } from '../common/partsOfTheForm/';
import { BtnSubmitFormReset } from './../BtnsComponents/';
import { FormInput, InformationTextForm, TitleFormArrow } from '../';
import { StylBoxViewContent } from '../common/Boxes/';
import { StylInformationText, StylLinkPage } from '../common/';
import emailImg from './../../img/icons/icon-email.svg';

const FormRestorePassword = () => {
  const [isEmail, setEmail] = useState(false),
    [isHiddenForm, setHiddenForm] = useState(true),
    regulEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleForm = () => {
    setHiddenForm(!isHiddenForm);
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validate={(values) => {
        if (!regulEmail.test(values.email)) {
          setEmail(!isEmail);
        } else {
          setEmail(!isEmail);
        }
      }}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(false);
        handleForm();
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>
            <TitleFormArrow />
            Restore password
          </StylTitleForm>

          <StylBoxViewContent view={isHiddenForm}>
            <InformationTextForm text='Please use your email address, and we’ll send you the link to reset your password' />
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
            <BtnSubmitFormReset
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
