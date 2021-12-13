import React, { FunctionComponent } from 'react';
import { StylTextContent, StylBoxColumn, LinkPage } from '../index';
import { IBoxContentLink } from '../../modules/Boxes.model';

const BoxContentLink: FunctionComponent<IBoxContentLink> = ({
  text,
  link,
  path,
}) => {
  return (
    <StylBoxColumn>
      <StylTextContent>{text}</StylTextContent>
      <LinkPage path={path} link={link} />
    </StylBoxColumn>
  );
};

export default BoxContentLink;
