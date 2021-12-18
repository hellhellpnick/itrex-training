import { FunctionComponent } from 'react';
import { StylTextContent, StylBoxColumn, LinkPage } from '../index';
import { IBoxContentLink } from '../../modules/Boxes.model';

const BoxContentLink: FunctionComponent<IBoxContentLink> = ({
  text,
  link,
  to,
}) => {
  return (
    <StylBoxColumn>
      <StylTextContent>{text}</StylTextContent>
      <LinkPage path={to} link={link} />
    </StylBoxColumn>
  );
};

export default BoxContentLink;
