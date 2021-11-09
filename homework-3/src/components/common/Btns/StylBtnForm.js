import styled from 'styled-components';

const StylBtnForm = styled.button`
  position: relative;
  cursor: pointer;
  max-width: 122px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  padding: 17px;
  padding-right: 40px;
  border-radius: 8px;
  margin-bottom: 5px;

  border: none;
  outline: none;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.main};
`;

export default StylBtnForm;
