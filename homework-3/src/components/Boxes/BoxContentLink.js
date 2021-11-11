import React from 'react';
import { StylBoxColumn } from './../common/Boxes/';
import { StylTextContent } from './../common/Text/';
import LinkPage from '../LinkPage';

const BoxContentLink = ({ text, link, path }) => {
  return (
    <StylBoxColumn>
      <StylTextContent>{text}</StylTextContent>
      <LinkPage path={path} link={link} />
    </StylBoxColumn>
  );
};

export default BoxContentLink;
