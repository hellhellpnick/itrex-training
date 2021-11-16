import styled from 'styled-components';

const StylArrowVisitDoctor = styled.span`
  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 24px;
    transform: ${(props) =>
      props.focusSelect
        ? 'translateY(-50%) rotate(-225deg)'
        : 'translateY(-50%) rotate(-45deg)'};
    width: 8px;
    height: 8px;
    border-top: 1px solid
      ${(props) =>
        props.focusSelect
          ? props.theme.palette.backgroundBtn.main
          : props.theme.palette.border.main};
    border-right: 1px solid
      ${(props) =>
        props.focusSelect
          ? props.theme.palette.backgroundBtn.main
          : props.theme.palette.border.main};
    transition: all 0.2s ease;
    z-index: 1;
  }
`;

export default StylArrowVisitDoctor;
