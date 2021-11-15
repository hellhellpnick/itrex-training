import styled from 'styled-components';

const StylSubTitlePosition = styled.h2`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
`;

export default StylSubTitlePosition;
