import styled from 'styled-components';

const StylBoxMenuSelectVisitDoctor = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  display: ${(props) => (props.focusSelect ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 620px;
  max-height: 130px;
  width: 100%;
  list-style: none;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 4px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 1;

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(220, 224, 236, 0.3);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.border.main};
    border-radius: 8px;
    opacity: 0.3;
  }
`;

export default StylBoxMenuSelectVisitDoctor;
