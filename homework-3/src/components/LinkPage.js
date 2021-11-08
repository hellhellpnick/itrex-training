import React from 'react';
import StylLinkPage from './common/StylLinkPage';

const LinkPage = ({ link, path }) => {
  return <StylLinkPage href={path}>{link}</StylLinkPage>;
};

export default LinkPage;
