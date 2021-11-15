import React from 'react';
import { StylTextContent, StylBoxColumn, LinkPage } from './../index';

const BoxContentLink = ({ text, link, path }) => {
  return (
    <StylBoxColumn>
      <StylTextContent>{text}</StylTextContent>
      <LinkPage path={path} link={link} />
    </StylBoxColumn>
  );
};

export default BoxContentLink;
