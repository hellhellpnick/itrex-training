import styled from 'styled-components';

const StylBtnEyePasswordStyle = styled.button`
  position: absolute;
  right: 26px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  transition: all 0.2s ease;
  z-index: 1;
  background-color: transparent;
`;

const StylIconInputEnd = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  z-index: 1;
`;

export { StylBtnEyePasswordStyle, StylIconInputEnd };
