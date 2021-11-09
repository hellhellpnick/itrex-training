import React from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import FormSignIn from '../components/FormSignIn';
import BoxFormSignIn from './../components/common/Boxes/StylBoxFormSignIn';
import BoxContentLink from './../components/BoxContentLink';

const SignUp = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <BoxFormSignIn>
          <FormSignIn />
          <BoxContentLink
            text='Don’t have an account?'
            link='Sign Up'
            path='/'
          />
        </BoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default SignUp;
