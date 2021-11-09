import React from 'react';
import { Formik } from 'formik';
import TitleForm from './common/StylTitleForm';
import FormInput from './FormInput';
import FormSign from './common/StylFormSign';
import BtnSubmitFormReset from './BtnSubmitFormReset';
import TitleFormArrow from './TitleFormArrow';
import InformationText from './common/StylInformationText';
import InformationTextForm from './InformationTextForm';
import emailImg from './../img/icons/icon-email.svg';
import LinkPage from './common/StylLinkPage';
import BoxViewContent from './common/Boxes/StylBoxViewContent';

const FormRestorePassword = () => {
  let [isEmail, setEmail] = React.useState(false);
  let [isHiddenForm, setHiddenForm] = React.useState(true);

  const handleForm = () => {
    setHiddenForm(!isHiddenForm);
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validate={(values) => {
        const regulEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regulEmail.test(values.email)) {
          setEmail((isEmail = true));
        } else {
          setEmail((isEmail = false));
        }
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values));
          setSubmitting(false);
          handleForm();
        }, 400);
      }}
    >
      {({ values, isSubmitting, handleChange, handleSubmit }) => (
        <FormSign onSubmit={handleSubmit}>
          <TitleForm>
            <TitleFormArrow />
            Restore password
          </TitleForm>

          <BoxViewContent view={isHiddenForm}>
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
          </BoxViewContent>
          <BoxViewContent view={!isHiddenForm}>
            <InformationText>
              An email has been sent to <LinkPage>{values.email}</LinkPage>.
              Check your inbox, and click the reset link provided.
            </InformationText>
          </BoxViewContent>
        </FormSign>
      )}
    </Formik>
  );
};

export default FormRestorePassword;
