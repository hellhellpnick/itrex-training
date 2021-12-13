import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { StylLinkPage } from './index';

interface ILinkPage {
  link: string;
  path: string;
}
const LinkPage: FunctionComponent<ILinkPage> = ({ link, path }) => {
  return (
    <StylLinkPage  path=''>
      <NavLink to={path}>{link}</NavLink>
    </StylLinkPage>
  );
};

export default LinkPage;
