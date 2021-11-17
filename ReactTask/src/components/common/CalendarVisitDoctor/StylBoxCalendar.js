import styled from 'styled-components';

const StylBoxCalendar = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 40px 32px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  background-color: ${(props) => props.theme.palette.main};
`;

export default StylBoxCalendar;
