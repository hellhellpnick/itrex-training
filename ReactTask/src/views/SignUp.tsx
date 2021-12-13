import  { FunctionComponent, useEffect } from 'react';
import {
  FormSignUp,
  BoxContentLink,
  StylBoxForm,
  StylBoxMain,
} from '../components';
import { routes } from '../Router';

interface ISignUp {
  title: string;
}

const SignUp: FunctionComponent<ISignUp> = ({ title }) => {
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
