import styled from 'styled-components';

const StylLabelFromInput = styled.label`
  display: block;
  position: absolute;
  top: calc(100% + 8px);
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.error.text};
  letter-spacing: -0.24px;
`;

export default StylLabelFromInput;
