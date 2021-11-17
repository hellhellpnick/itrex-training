import styled from 'styled-components';
import arrowRight from './../../../img/icons/icon-arrow-right-light.svg';

const StylIconArrowBtn = styled.img`
  position: absolute;
  content: url(${arrowRight});
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  width: 15px;
  height: 15px;
  margin-left: 15px;
  transition: all 0.2s ease;
`;

export default StylIconArrowBtn;
