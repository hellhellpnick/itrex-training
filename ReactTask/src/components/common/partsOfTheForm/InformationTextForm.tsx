import React, { FunctionComponent } from 'react';
import { StylInformationText } from './index';

interface IInformationTextForm {
  text: string;
}

const InformationTextForm: FunctionComponent<IInformationTextForm> = ({
  text,
}) => {
  return <StylInformationText>{text}</StylInformationText>;
};

export default InformationTextForm;
