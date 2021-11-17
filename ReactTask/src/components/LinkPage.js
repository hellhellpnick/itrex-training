import React from 'react';
import { StylLinkPage } from './index.js';

const LinkPage = ({ link, path }) => {
  return <StylLinkPage href={path}>{link}</StylLinkPage>;
};

export default LinkPage;
