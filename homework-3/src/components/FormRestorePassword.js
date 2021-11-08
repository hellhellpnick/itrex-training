import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import TitleForm from './common/StylTitleForm';
import FormInput from './FormInput';
import FormSign from './common/StylFormSign';
import BtnSubmitForm from './BtnSubmitForm';
import emailImg from './../img/icons/icon-email.svg';

const FormRestorePassword = () => {
  let [isEmail, setEmail] = React.useState(false);

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
          <ErrorMessage name='email' component='div' />
          <BtnSubmitForm
            type='submit'
            disabled={isSubmitting}
            text='Send Reset Link'
          />
        </FormSign>
      )}
    </Formik>
  );
};

export default FormRestorePassword;
