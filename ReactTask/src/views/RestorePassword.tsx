import  { FunctionComponent, useEffect } from 'react';
import {
  FormRestorePassword,
  StylBoxFormSignIn,
  StylBoxMain,
} from '../components';

interface IRestorePassword {
  title: string;
}

const RestorePassword: FunctionComponent<IRestorePassword> = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <StylBoxFormSignIn>
          <FormRestorePassword />
        </StylBoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default RestorePassword;
