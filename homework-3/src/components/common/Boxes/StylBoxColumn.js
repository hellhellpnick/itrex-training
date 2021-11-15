import styled from 'styled-components';

const StylBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default StylBoxColumn;
