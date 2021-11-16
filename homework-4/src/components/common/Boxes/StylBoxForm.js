import styled from 'styled-components';

const StylBoxForm = styled.div`
  position: relative;
  top: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  padding: 32px;
  border-radius: 24px 24px 0px 0px;
  min-height: calc(100vh - 72px);

  @media (min-width: 768px) {
    top: 0;
    min-height: 100vh;
    border-radius: 0;
    width: 560px;
    padding: 80px 96px;
    justify-content: space-between;
  }
`;

export default StylBoxForm;
