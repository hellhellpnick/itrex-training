import  { FunctionComponent, useState } from 'react';
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
} from '../index';
import emailImgSvg from './../../img/icons/icon-email.svg';
import { regulEmail } from '../../constants';
import { routes } from '../../Router';

interface IRestorePassword {
  email: string;
}

const FormRestorePassword: FunctionComponent = () => {
  const [isEmail, setEmail] = useState(false),
    [isHiddenForm, setHiddenForm] = useState(true);

  const handleForm = () => {
    setHiddenForm(!isHiddenForm);
  };

  const submitForm = (values: IRestorePassword) => {
    handleForm();
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
      onSubmit={submitForm}
    >
      {({ values, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>
            <TitleFormArrow path={routes.signInPage} link={<></>} />
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
              disabled={isSubmitting}
              text='Send Reset Link'
              role=''
            />
          </StylBoxViewContent>
          <StylBoxViewContent view={!isHiddenForm}>
            <StylInformationText>
              An email has been sent to{' '}
              <StylLinkPage path=''>
                {values.email}
              </StylLinkPage>
              . Check your inbox, and click the reset link provided.
            </StylInformationText>
          </StylBoxViewContent>
        </StylFormSign>
      )}
    </Formik>
  );
};

export default FormRestorePassword;
