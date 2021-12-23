import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  FormInput,
  LinkPage,
  BtnSubmitForm,
  StylFormSign,
  StylTitleForm,
} from '..';

import { routes } from '../../Router';
import emailImgSvg from './../../assets/icons/icon-email.svg';
import passwordlImgSvg from './../../assets/icons/icon-lock.svg';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { ISignIn } from '../../modules/Forms.model';

const FormSignUp = () => {
  const { loginUser } = useActionsWithRedux();

  const handleSubmit = (values: ISignIn) => {
    loginUser(values);
  };

  const validateSignIn = Yup.object({
    userName: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      validationSchema={validateSignIn}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        userName: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        isSubmitting,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
      }) => (
        <StylFormSign onSubmit={handleSubmit}>
          <StylTitleForm>Sign in</StylTitleForm>

          <FormInput
            type='email'
            name='userName'
            placeholder='Email'
            valueInput={values.userName}
            imgStart={emailImgSvg}
            err={errors.userName}
            blur={handleBlur}
            errText={errors.userName}
            changer={handleChange}
          />

          <FormInput
            type='password'
            name='password'
            valueInput={values.password}
            placeholder='Password'
            imgStart={passwordlImgSvg}
            password={true}
            err={errors.password}
            errText={errors.password}
            changer={handleChange}
            blur={handleBlur}
          />

          <BtnSubmitForm
            disabled={isSubmitting}
            text='Sign in'
            role='btnSignIn'
          />

          <LinkPage
            path={routes.restorePasswordPage}
            link='Forgot Password?'
          ></LinkPage>
        </StylFormSign>
      )}
    </Formik>
  );
};

export default FormSignUp;
