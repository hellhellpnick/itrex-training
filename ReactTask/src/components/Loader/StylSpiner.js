import styled from 'styled-components';

const Spiner = styled.svg`
  animation: Rotate 2.4s both infinite linear;
  transform: scale(1, -1);

  & > path {
    animation: DrawLine 1.6s both infinite alternate linear;
    fill: none;
    stroke: ${(props) => props.theme.palette.backgroundBtn.main};
    stroke-width: 50;
  }

  @keyframes Rotate {
    0% {
      transform: rotate(0deg) scale(1, -1);
    }
    100% {
      transform: rotate(360deg) scale(1, -1);
    }
  }
  @keyframes DrawLine {
    0% {
      stroke-dasharray: 0 126;
    }
    100% {
      stroke-dasharray: 126 126;
    }
  }
`;

export default Spiner;
