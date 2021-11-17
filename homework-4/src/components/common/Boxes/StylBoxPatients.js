import styled from 'styled-components';

const StylBoxPatients = styled.div`
  position: relative;
  padding: 16px 0 0;
  background-color: ${(props) => props.theme.palette.backgroundColor.primary};
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 20px 64px 48px 64px;
  }
`;

export default StylBoxPatients;
