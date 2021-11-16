import styled from 'styled-components';

const StylBtnVisitDoctor = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  top: 6px;
  width: 8px;
  height: 15px;
  background-color: transparent;
  background-image: url(${(props) => props.imgUrl});

  &:first-child {
    transform: rotate(180deg);
  }
`;

export default StylBtnVisitDoctor;
