import styled from 'styled-components';

const StylBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 22px;
  }
`;

export default StylBoxRow;
