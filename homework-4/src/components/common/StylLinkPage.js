import styled from 'styled-components';

const StylLinkPage = styled.a`
  text-decoration: underline;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
`;

export default StylLinkPage;
