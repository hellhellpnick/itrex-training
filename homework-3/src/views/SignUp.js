import React, { useEffect } from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import { FormSignUp } from '../components/Forms';
import { StylBoxForm } from './../components/common/Boxes';
import { BoxContentLink } from './../components/Boxes';
import { routes } from './../Router';

const SignUp = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <StylBoxForm>
          <FormSignUp />
          <BoxContentLink
            text='Already have an account?'
            link='Sign in'
            path={routes.signInPage}
          />
        </StylBoxForm>
      </StylBoxMain>
    </>
  );
};

export default SignUp;
