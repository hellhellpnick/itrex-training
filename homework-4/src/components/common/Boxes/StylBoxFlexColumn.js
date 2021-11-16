import styled from 'styled-components';

const StylBoxFlexColumn = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: nowrap;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-right: 16px;
  }
`;

export default StylBoxFlexColumn;
