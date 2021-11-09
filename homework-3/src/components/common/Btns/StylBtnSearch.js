import styled from 'styled-components';

const StylBtnSearch = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20px;
  height: 20px;
  margin-right: 28px;
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) {
    min-width: 95px;
  }
`;

export default StylBtnSearch;
