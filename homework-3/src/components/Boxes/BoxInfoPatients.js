import React from 'react';
import { StylTextInfo } from './../common/Text/';
import { StylBoxImgInfo, StylBoxDoctor } from './../common/Boxes/';

const BoxInfoPatient = ({ info, imgWay }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={imgWay} alt='time icon' />
      <StylTextInfo>{info}</StylTextInfo>
    </StylBoxDoctor>
  );
};

export default BoxInfoPatient;
