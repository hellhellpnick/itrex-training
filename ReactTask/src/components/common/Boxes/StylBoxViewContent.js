import styled from 'styled-components';

const StylBoxViewContent = styled.div`
  display: ${(props) => (props.view ? 'block' : 'none')};
`;

export default StylBoxViewContent;
