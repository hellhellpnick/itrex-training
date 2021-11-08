import React from 'react';
import { StylBoxMain } from '../components/common/StylBoxMain';
import FormRestorePassword from '../components/FormRestorePassword';
import BoxForm from './../components/common/StylBoxForm';
import BoxContentLink from './../components/BoxContentLink';

const RestorePassword = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <StylBoxMain>
        <BoxForm>
          <FormRestorePassword />
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

export default RestorePassword;
