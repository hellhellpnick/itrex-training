import styled from 'styled-components';

const StylBoxBtnPatients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 56px;
  }
`;

export default StylBoxBtnPatients;
