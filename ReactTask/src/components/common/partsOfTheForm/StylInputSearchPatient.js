import styled from 'styled-components';

const StylInputSearchPatient = styled.input`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    border: none;
    outline: none;
    width: 70%;
    background-color: transparent;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    line-height: 140%;
    margin-left: 18px;

    &::placeholder {
      font-size: ${(props) => props.theme.typography.textSmall.primary};
      font-weight: ${(props) => props.theme.typography.textWeight.main};
      color: ${(props) => props.theme.palette.text.primary};
      font-family: ${(props) => props.theme.typography.textFamily.main};
      text-transform: capitalize;
    }
  }
`;

export default StylInputSearchPatient;
