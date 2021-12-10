import React, { FunctionComponent } from 'react';
import { StylBoxDoctor, StylTextInfo } from '../index';
import { IBoxInfoPatient } from '../../modules/Boxes.modules';

const BoxInfoPatient: FunctionComponent<IBoxInfoPatient> = ({
  info,
  imgWay,
}) => {
  return (
    <StylBoxDoctor imgWay={imgWay}>
      <StylTextInfo>{info}</StylTextInfo>
    </StylBoxDoctor>
  );
};

export default BoxInfoPatient;
