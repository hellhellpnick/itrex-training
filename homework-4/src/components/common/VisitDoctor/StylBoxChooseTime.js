import styled from 'styled-components';

const StylBoxChooseTime = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 40px;
  height: 150px;
  width: 320px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    width: auto;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export default StylBoxChooseTime;
