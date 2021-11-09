import styled from 'styled-components';

const StylBoxSelect = styled.div`
  display: ${(props) => (props.hidden ? 'block' : 'none')};
  position: absolute;
  width: 160px;
  bottom: -78px;
  left: -160px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 1;
`;

export default StylBoxSelect;
