import React from 'react';
import BoxDoctor from './common/Boxes/StylBoxDoctor';
import TextInfo from './common/StylTextInfo';
import BoxImgInfo from './common/Boxes/StylBoxImgInfo';

const BoxInfoPatient = ({ info, imgWay }) => {
  return (
    <BoxDoctor>
      <BoxImgInfo src={imgWay} alt='time icon' />
      <TextInfo>{info}</TextInfo>
    </BoxDoctor>
  );
};

export default BoxInfoPatient;
