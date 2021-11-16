import styled from 'styled-components';

const StylBoxCardPatient = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  min-width: 270px;
  width: 100%;
  background: ${(props) => props.theme.palette.main};
  box-shadow: 0px 4px 32px rgb(218 228 255 / 24%);
  border-radius: 12px;
  padding: 24px 16px 24px 24px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    max-width: 390px;
    padding: 32px;
    margin-right: 20px;
  }
`;

export default StylBoxCardPatient;
