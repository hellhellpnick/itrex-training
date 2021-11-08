import React from 'react';
import { StylBoxMain } from '../components/common/StylBoxMain';
import FormSignUp from '../components/FormSignUp';
import BoxForm from './../components/common/StylBoxForm';
import BoxContentLink from './../components/BoxContentLink';

const SignUp = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <BoxForm>
          <FormSignUp />
          <BoxContentLink
            text='Already have an account?'
            link='Sign in'
            path='signIn'
          />
        </BoxForm>
      </StylBoxMain>
    </>
  );
};

export default SignUp;
