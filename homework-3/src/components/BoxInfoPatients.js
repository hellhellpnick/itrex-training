import React from 'react';
import BoxDoctor from './common/Boxes/StylBoxDoctor';
import TextInfo from './common/StylTextInfo';
import BoxImgInfo from './common/Boxes/StylBoxImgInfo';
import scheduleImg from './../img/icons/schedule.png';

const BoxInfoPatient = ({ info }) => {
  return (
    <BoxDoctor>
      <BoxImgInfo src={scheduleImg} alt='time icon' />
      <TextInfo>{info}</TextInfo>
    </BoxDoctor>
  );
};

export default BoxInfoPatient;
