import styled from 'styled-components';

const StylInputVisitDoctor = styled.input`
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 16px 24px;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  border: 1px solid ${(props) => props.theme.palette.border.main};
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  overflow: hidden;

  &:focus {
    border-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  &::placeholder-shown {
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }

  &::placeholder {
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }
`;

export default StylInputVisitDoctor;
