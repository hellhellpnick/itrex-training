import React from 'react';
import { StylBoxDoctor, StylBoxImgInfo, StylTextData } from './../index';
import timeImgSvg from './../../img/icons/icon-time.svg';

const BoxDataPatient = ({ data }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={timeImgSvg} alt='time icon' />
      <StylTextData>{data}</StylTextData>
    </StylBoxDoctor>
  );
};

export default BoxDataPatient;
