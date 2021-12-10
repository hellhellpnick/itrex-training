import React, { FunctionComponent } from 'react';
import { StylAvatarActive, StylAvatarImg } from '../index';
import { IAvatarActive } from '../../modules/HeaderProfile.modules';

const AvatarActive: FunctionComponent<IAvatarActive> = ({
  src,
  alt,
  isOnline,
}) => {
  return (
    <StylAvatarActive isOnline={isOnline}>
      <StylAvatarImg src={src} alt={alt} />
    </StylAvatarActive>
  );
};

export default AvatarActive;
