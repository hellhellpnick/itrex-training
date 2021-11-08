import React from 'react';
import { StylBoxMain } from '../components/common/StylBoxMain';
import FormRestorePassword from '../components/FormRestorePassword';
import BoxFormSignIn from './../components/common/StylBoxFormSignIn';

const RestorePassword = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <BoxFormSignIn>
          <FormRestorePassword />
        </BoxFormSignIn>
      </StylBoxMain>
    </>
  );
};

export default RestorePassword;
