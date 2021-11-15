import React from 'react';
import { StylAvatarActive } from './index.js';

const AvatarActive = ({ src, alt }) => {
  return (
    <StylAvatarActive>
      <img src={src} alt={alt} />
    </StylAvatarActive>
  );
};

export default AvatarActive;
