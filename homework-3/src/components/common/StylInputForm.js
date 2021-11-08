import styled from 'styled-components';

const StylInputForm = styled.input`
  position: relative;
  border: none;
  outline: none;
  max-height: 58px;
  width: 100%;
  padding: 20px 26px 20px 64px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.err
        ? props.theme.palette.error.border
        : props.theme.palette.border.main};
  transition: all 0.2s ease;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.main};

  ::placeholder {
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.typography.textMedium.main};

    ::placeholder {
      font-size: ${(props) => props.theme.typography.textMedium.main};
    }
  }
`;

export default StylInputForm;
