import styled from 'styled-components';

const StylBoxPatientContent = styled.div`
  display: ${(props) => (props.hiddenMode ? 'none' : 'block')};
  min-height: calc(100vh - 72px);
  background: ${(props) => props.theme.palette.backgroundColor.main};
  box-shadow: 0px 4px 32px rgb(218 228 255 / 32%);
  border-radius: 16px 16px 0px 0px;
  padding: 40px 24px;

  @media (min-width: 768px) {
    min-height: calc(100vh - 130px);
    border-radius: 16px;
    padding: 40px 48px;
  }
`;

export default StylBoxPatientContent;
