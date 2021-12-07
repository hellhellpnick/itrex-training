import React from 'react';
import { NavLink } from 'react-router-dom';
import { StylLinkPage } from './index.js';

const LinkPage = ({ link, path }) => {
  return (
    <StylLinkPage>
      <NavLink to={path}>{link}</NavLink>
    </StylLinkPage>
  );
};

export default LinkPage;
