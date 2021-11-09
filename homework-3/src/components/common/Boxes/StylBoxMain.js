import styled from 'styled-components';
import bgMain from './../../../img/bg-main.png';

export const StylBoxMain = styled.main`
  background-image: url('${bgMain}');
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  min-height: 100vh;

  @media (min-width: 768px) {
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
