import React from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import FormRestorePassword from '../components/Forms/FormRestorePassword';
import BoxFormSignIn from './../components/common/Boxes/StylBoxFormSignIn';
import Loader from './../components/Loader/Loader';

const RestorePassword = ({ title }) => {
  React.useEffect(() => {
    document.title = title || '';
  }, [title]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <StylBoxMain>
          <BoxFormSignIn>
            <FormRestorePassword />
          </BoxFormSignIn>
        </StylBoxMain>
      </>
    );
  }
};

export default RestorePassword;
