import React from 'react';
import { StylAvatarActive, StylAvatarImg } from '../index.js';

const AvatarActive = ({ src, alt, isOnline }) => {
  return (
    <StylAvatarActive isOnline={isOnline}>
      <StylAvatarImg src={src} alt={alt} />
    </StylAvatarActive>
  );
};

export default AvatarActive;
