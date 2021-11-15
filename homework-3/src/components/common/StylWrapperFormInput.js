import styled from 'styled-components';

const StylWrapperFormInput = styled.div`
  position: relative;
  width: 100%;
  min-width: 256px;
  transition: all 0.2s ease;
  margin-bottom: ${(props) => (props.err ? '60px' : '24px')};
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    margin-bottom: ${(props) => (props.err ? '70px' : '40px')};
  }
`;

export default StylWrapperFormInput;
