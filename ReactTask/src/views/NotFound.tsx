import { FunctionComponent, useEffect } from 'react';
import {
  StylBoxCenter,
  StylImgNotFound,
  StylTitleNotFound,
} from '../components';

import notFound from './../assets/404.png';

interface INotFound {
  title: string;
}

const NotFound: FunctionComponent<INotFound> = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <StylBoxCenter>
      <StylImgNotFound src={notFound} alt='not found' />
      <StylTitleNotFound>
        Oops... <br />
        We can’t seem to find the page you are looking for.
      </StylTitleNotFound>
    </StylBoxCenter>
  );
};

export default NotFound;
