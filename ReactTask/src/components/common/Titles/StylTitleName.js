import styled from 'styled-components';

const StylTitleName = styled.h2`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  margin-bottom: 4px;
  line-height: 120%;
  text-transform: capitalize;
`;

export default StylTitleName;
