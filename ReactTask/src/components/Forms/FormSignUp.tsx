import { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { BtnSubmitForm, StylTitleForm, FormInput } from '..';
import userImgSvg from './../../assets/icons/icon-user.svg';
import emailImgSvg from './../../assets/icons/icon-email.svg';
import passwordlImgSvg from './../../assets/icons/icon-lock.svg';
import checkImgSvg from './../../assets/icons/icon-check.svg';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { ISignUp } from '../../modules/Forms.model';

const FormSignUp: FunctionComponent = () => {
  const { registerUser } = useActionsWithRedux();

  const handleSubmit = (values: ISignUp) => {
    const obj = {
      userName: values.userName,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    registerUser(obj);
  };

  const validateSignUp = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    userName: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
      checkPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      validationSchema={validateSignUp}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        checkPassword: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, errors, isSubmitting, handleChange, handleBlur }) => (
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
            err={errors.firstName}
            errText={errors.firstName}
          />

          <FormInput
            type='text'
            name='lastName'
            placeholder='Last name'
            valueInput={values.lastName}
            imgStart={userImgSvg}
            changer={handleChange}
            blur={handleBlur}
            err={errors.lastName}
            errText={errors.lastName}
          />

          <FormInput
            type='email'
            name='userName'
            placeholder='Email'
            valueInput={values.userName}
            imgStart={emailImgSvg}
            err={errors.userName}
            errText={errors.userName}
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
            err={errors.password}
            errText={errors.password}
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
            err={errors.checkPassword}
            errText={errors.checkPassword}
            changer={handleChange}
            blur={handleBlur}
          />
          <BtnSubmitForm
            disabled={isSubmitting}
            text='Sign up'
            role='btnSignUp'
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
