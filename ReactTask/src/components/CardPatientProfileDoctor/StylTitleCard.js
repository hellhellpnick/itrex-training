import styled from 'styled-components';

const StylTitleCard = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 130%;
  margin-bottom: 4px;
  align-self: flex-start;
`;

export default StylTitleCard;
