import React from 'react';
import { StylBoxDoctor, StylBoxImgInfo, StylTextData } from './../index';
import timeImg from './../../img/icons/time.png';

const BoxDataPatient = ({ data }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={timeImg} alt='time icon' />
      <StylTextData>{data}</StylTextData>
    </StylBoxDoctor>
  );
};

export default BoxDataPatient;
