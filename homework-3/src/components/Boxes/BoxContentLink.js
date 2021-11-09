import React from 'react';
import BoxColumn from './../common/Boxes/StylBoxColumn';
import TextContent from './../common/Text/StylTextContent';
import LinkPage from '../LinkPage';

const BoxContentLink = ({ text, link, path }) => {
  return (
    <BoxColumn>
      <TextContent>{text}</TextContent>
      <LinkPage path={path} link={link} />
    </BoxColumn>
  );
};

export default BoxContentLink;
