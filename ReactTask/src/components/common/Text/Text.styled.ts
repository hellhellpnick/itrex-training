import styled from 'styled-components';

const StylTextContent = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};

  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const StylTextData = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  margin-bottom: 24px;
`;

const StylTextFilterPatient = styled.p`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    line-height: 130%;
    margin-bottom: 24px;
  }
`;

const StylTextInfo = styled(StylTextData)`
  font-weight: ${(props) => props.theme.typography.textWeight.main};
`;

export { StylTextContent, StylTextData, StylTextFilterPatient, StylTextInfo };
