import React from 'react';
import { StylBoxMain } from '../components/common/Boxes/StylBoxMain';
import FormSignUp from '../components/Forms/FormSignUp';
import BoxForm from './../components/common/Boxes/StylBoxForm';
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
          <BoxForm>
            <FormSignUp />
            <BoxContentLink
              text='Already have an account?'
              link='Sign in'
              path='signIn'
            />
          </BoxForm>
        </StylBoxMain>
      </>
    );
  }
};

export default SignUp;
