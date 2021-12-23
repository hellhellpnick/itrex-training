import  { FunctionComponent, useEffect } from 'react';
import {
  FormSignIn,
  BoxContentLink,
  StylBoxFormSignIn,
  StylBoxMain,
} from '../components';
import { routes } from '../Router';

interface ISigIn {
  title: string;
}

const SignIn: FunctionComponent<ISigIn> = ({ title }) => {
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
            to={routes.signUpPage}
          />
        </StylBoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default SignIn;
