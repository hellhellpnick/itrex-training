import React from 'react';
import { StylBoxMain } from '../components/common/StylBoxMain';
import FormSignIn from '../components/FormSignIn';
import StylBoxFormSignIn from './../components/common/StylBoxFormSignIn';
import BoxContentLink from './../components/BoxContentLink';

const SignUp = ({title}) => {
  React.useEffect(() => {
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
            path='/'
          />
        </StylBoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default SignUp;