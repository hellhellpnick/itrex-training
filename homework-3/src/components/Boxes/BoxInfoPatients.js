import React from 'react';
import { StylBoxImgInfo, StylBoxDoctor, StylTextInfo } from './../index';

const BoxInfoPatient = ({ info, imgWay }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={imgWay} alt='time icon' />
      <StylTextInfo>{info}</StylTextInfo>
    </StylBoxDoctor>
  );
};

export default BoxInfoPatient;
