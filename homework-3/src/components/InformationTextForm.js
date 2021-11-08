import React from 'react';
import InformationText from './common/StylInformationText';

const InformationTextForm = ({ text, link = ''}) => {
  return <InformationText>{text}</InformationText>;
};

export default InformationTextForm;
