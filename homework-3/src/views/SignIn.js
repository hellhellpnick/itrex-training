import React from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import FormSignIn from '../components/Forms/FormSignIn';
import BoxFormSignIn from './../components/common/Boxes/StylBoxFormSignIn';
import BoxContentLink from './../components/Boxes/BoxContentLink';
import Loader from './../components/Loader/Loader';

const SignUp = ({ title }) => {
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
            <FormSignIn />
            <BoxContentLink
              text='Don’t have an account?'
              link='Sign Up'
              path='/'
            />
          </BoxFormSignIn>
        </StylBoxMain>
      </>
    );
  }
};

export default SignUp;
