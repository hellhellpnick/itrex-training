import React from 'react';
import { StylInformationText } from './common/';

const InformationTextForm = ({ text, link = '' }) => {
  return <StylInformationText>{text}</StylInformationText>;
};

export default InformationTextForm;
