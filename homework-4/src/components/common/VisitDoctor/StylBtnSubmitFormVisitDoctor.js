import styled, { css } from 'styled-components';

const StylBtnSubmitFormVisitDoctor = styled.button`
  cursor: pointer;
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
  padding: 8px 16px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  transition: all 0.2s ease;
  border: none;
  outline: none;
  padding: 16px;
  max-width: 160px;
  width: 100%;

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
      color: ${(props) => props.theme.palette.main};
    `}
`;

export default StylBtnSubmitFormVisitDoctor;
