import styled from 'styled-components';
import iconDots from './../../../img/icons/icon-dots.svg';

const StylBtnMore = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  ::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${iconDots});
  }
`;

export default StylBtnMore;
