import React, { useEffect } from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import { FormSignIn } from '../components/Forms/';
import { StylBoxFormSignIn } from './../components/common/Boxes/';
import { BoxContentLink } from './../components/Boxes';
import routes from './../Routes';

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
