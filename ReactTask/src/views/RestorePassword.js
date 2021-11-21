import React, { useEffect } from 'react';
import {
  FormRestorePassword,
  StylBoxFormSignIn,
  StylBoxMain,
} from '../components/';

const RestorePassword = ({ title }) => {
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
