import React from 'react';
import { StylTextData } from './../common/Text/';
import { StylBoxDoctor, StylBoxImgInfo } from './../common/Boxes/';
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
