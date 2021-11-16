import React, { useEffect } from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import { FormRestorePassword, StylBoxFormSignIn } from '../components/';

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
