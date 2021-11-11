import React, { useEffect } from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import { FormRestorePassword } from '../components/Forms/';
import { StylBoxFormSignIn } from './../components/common/Boxes/';

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
