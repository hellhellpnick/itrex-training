import React, { useEffect } from 'react';
import {
  FormSignIn,
  BoxContentLink,
  StylBoxFormSignIn,
  StylBoxMain,
} from '../components/';
import { routes } from './../Router';

const SignUp = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <StylBoxFormSignIn>
          <FormSignIn />
          <BoxContentLink
            text='Don’t have an account?'
            link='Sign Up'
            path={routes.signUpPage}
          />
        </StylBoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default SignUp;
