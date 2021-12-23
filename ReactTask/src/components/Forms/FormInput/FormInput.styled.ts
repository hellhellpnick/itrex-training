import styled from 'styled-components';

interface IErrorExpected {
  err: string;
}

const StylInputForm = styled.input<IErrorExpected>`
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
        ? `${props.theme.palette.error.border} !important`
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

  &:focus {
    border-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.typography.textMedium.main};

    ::placeholder {
      font-size: ${(props) => props.theme.typography.textMedium.main};
    }

    &:hover {
      border-color: ${(props) => props.theme.palette.backgroundBtn.main};
    }
  }
`;

const StylWrapperFormInput = styled.div<IErrorExpected>`
  position: relative;
  width: 100%;
  min-width: 256px;
  transition: all 0.2s ease;
  margin-bottom: ${(props) => (props.err ? '60px' : '24px')};
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    margin-bottom: ${(props) => (props.err ? '70px' : '40px')};
  }
`;

const StylIconInputStart = styled.img`
  position: absolute;
  left: 26px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  z-index: 1;
  border: none;
`;

export { StylInputForm, StylWrapperFormInput, StylIconInputStart };
