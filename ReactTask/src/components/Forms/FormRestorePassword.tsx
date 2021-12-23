import { FunctionComponent, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
} from '../index';
import emailImgSvg from './../../assets/icons/icon-email.svg';
import { routes } from '../../Router';

interface IRestorePassword {
  userName: string;
}

const FormRestorePassword: FunctionComponent = () => {
  const [isHiddenForm, setHiddenForm] = useState(true);

  const handleForm = () => {
    setHiddenForm(!isHiddenForm);
  };

  const submitForm = (values: IRestorePassword) => {
    handleForm();
  };

  const validateRestorePassword = Yup.object({
    userName: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
  });

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={validateRestorePassword}
      initialValues={{
        userName: '',
      }}
      onSubmit={submitForm}
    >
      {({
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
      }) => (
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
              valueInput={values.userName}
              imgStart={emailImgSvg}
              err={errors.userName}
              errText={errors.userName}
              blur={handleBlur}
              changer={handleChange}
            />
            <BtnSubmitForm
              disabled={isSubmitting}
              text='Send Reset Link'
              role=''
            />
          </StylBoxViewContent>
          <StylBoxViewContent view={!isHiddenForm}>
            <StylInformationText>
              An email has been sent to{' '}
              <StylLinkPage>{values.userName}</StylLinkPage>. Check your inbox,
              and click the reset link provided.
            </StylInformationText>
          </StylBoxViewContent>
        </StylFormSign>
      )}
    </Formik>
  );
};

export default FormRestorePassword;
