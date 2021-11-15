import styled from 'styled-components';

const StylAvatarActive = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  :before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.palette.backgroundColor.primary};
  }

  :after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
  }
`;

export default StylAvatarActive;
