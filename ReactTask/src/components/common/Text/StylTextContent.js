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

export default StylTextContent;
