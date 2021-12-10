import React, { FunctionComponent } from 'react';
import { StylBoxDoctor, StylBoxImgInfo, StylTextData } from '../index';
import timeImgSvg from './../../img/icons/icon-time.svg';
import { IBoxDataPatient } from '../../modules/Boxes.modules';

const BoxDataPatient: FunctionComponent<IBoxDataPatient> = ({ data }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={timeImgSvg} alt='time icon' />
      <StylTextData>{data}</StylTextData>
    </StylBoxDoctor>
  );
};

export default BoxDataPatient;
