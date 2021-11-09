import React from 'react';
import BoxDoctor from './common/Boxes/StylBoxDoctor';
import TextData from './common/StylTextData';
import BoxImgInfo from './common/Boxes/StylBoxImgInfo';
import timeImg from './../img/icons/time.png';

const BoxDataPatient = ({ data }) => {
  return (
    <BoxDoctor>
      <BoxImgInfo src={timeImg} alt='time icon' />
      <TextData>{data}</TextData>
    </BoxDoctor>
  );
};

export default BoxDataPatient;
