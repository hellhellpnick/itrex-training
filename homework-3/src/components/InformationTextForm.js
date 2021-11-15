import React from 'react';
import { StylInformationText } from './index.js';

const InformationTextForm = ({ text, link = '' }) => {
  return <StylInformationText>{text}</StylInformationText>;
};

export default InformationTextForm;
