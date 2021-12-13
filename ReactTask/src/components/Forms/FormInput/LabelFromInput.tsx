import  { FunctionComponent } from 'react';
import { StylLabelFromInput } from './LabelFromInput.styled';

interface ILabelFromInput {
  text: string;
  forLabel: string;
}

const LabelFromInput: FunctionComponent<ILabelFromInput> = ({
  text,
  forLabel,
}) => {
  return <StylLabelFromInput>{text}</StylLabelFromInput>;
};

export default LabelFromInput;
