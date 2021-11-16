import styled from 'styled-components';

const StylBoxPatientsList = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-right: 20px;

    ::-webkit-scrollbar {
      width: 12px;
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
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default StylBoxPatientsList;
