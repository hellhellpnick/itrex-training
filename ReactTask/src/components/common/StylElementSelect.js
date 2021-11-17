import styled from 'styled-components';

const StylElementSelect = styled.p`
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: left;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
`;

export default StylElementSelect;
