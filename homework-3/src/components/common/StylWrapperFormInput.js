import styled from 'styled-components';

const StylWrapperFormInput = styled.div`
  position: relative;
  width: 100%;
  min-width: 256px;
  transition: all 0.2s ease;
  margin-bottom: ${(props) => (props.err ? '40px' : '24px')};

  @media (min-width: 768px) {
    margin-bottom: 40px;

    margin-bottom: ${(props) => (props.err ? '48px' : '40px')};
  }
`;

export default StylWrapperFormInput;
