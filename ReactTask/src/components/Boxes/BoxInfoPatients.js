import React from 'react';
import {  StylBoxDoctor, StylTextInfo } from './../index';

const BoxInfoPatient = ({ info, imgWay }) => {
  return (
    <StylBoxDoctor imgWay={imgWay}>
      <StylTextInfo>{info}</StylTextInfo>
    </StylBoxDoctor>
  );
};

export default BoxInfoPatient;
