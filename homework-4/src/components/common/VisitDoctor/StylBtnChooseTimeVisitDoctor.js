import styled, { css } from 'styled-components';

const StylBtnChooseTimeVisitDoctor = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
  padding: 8px 16px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.main};
  border: 1px solid transparent;
  transition: all 0.2s ease;
  margin-right: 16px;
  margin-bottom: 16px;
  max-width: 115px;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.palette.backgroundBtn.main};
      background-color: ${(props) => props.theme.palette.main};
      color: ${(props) => props.theme.palette.text.second};

      &:hover {
        background-color: ${(props) => props.theme.palette.main};
        color: ${(props) => props.theme.palette.text.second};
      }
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
      color: ${(props) => props.theme.palette.main};

      &:hover {
        background-color: ${(props) =>
          props.theme.palette.backgroundColor.primary};
        color: ${(props) => props.theme.palette.main};
      }
    `}
`;

export default StylBtnChooseTimeVisitDoctor;
