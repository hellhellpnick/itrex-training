import styled from 'styled-components';
import bgMain from './../../../img/bg-main.png';

const StylBoxBtnPatients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 56px;
  }
`;

const StylBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StylBoxColumnFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
`;

const StylBoxDoctor = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  padding-left: ${(props) => props.imgWay && '38px'};

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 30px;
    left: 0;

    background-image: url(${(props) => props.imgWay && props.imgWay});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

const StylBoxFlexColumn = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: nowrap;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-right: 16px;
  }
`;

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

const StylBoxFormSignIn = styled(StylBoxForm)`
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const StylBoxImgInfo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 18px;
`;

const StylBoxPatientContent = styled.div`
  position: relative;
  display: 'block';
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

const StylBoxPatients = styled.div`
  position: relative;
  padding: 16px 0 0;
  background-color: ${(props) => props.theme.palette.backgroundColor.primary};
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 20px 64px 48px 64px;
  }
`;

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

const StylBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 22px;
  }
`;

const StylBoxRowFlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 72px;
`;

const StylBoxMain = styled.main`
  background-image: url('${bgMain}');
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  min-height: 100vh;

  @media (min-width: 768px) {
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StylBoxRowPadding = styled(StylBoxRow)`
  padding: 0;
  align-items: center;

  @media (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

const StylBoxRowMargin = styled(StylBoxRowPadding)`
  margin: 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StylBoxSelect = styled.div`
  display: ${(props) => (props.hidden ? 'block' : 'none')};
  position: absolute;
  width: 160px;
  bottom: -78px;
  left: -160px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 1;

  @media (min-width: 1024px) {
    left: -20px;
    bottom: -98px;
  }
`;

const StylBoxViewContent = styled.div`
  display: ${(props) => (props.view ? 'block' : 'none')};
`;

export {
  StylBoxMain,
  StylBoxBtnPatients,
  StylBoxColumn,
  StylBoxColumnFlex,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxForm,
  StylBoxFormSignIn,
  StylBoxImgInfo,
  StylBoxPatientContent,
  StylBoxPatients,
  StylBoxPatientsList,
  StylBoxRow,
  StylBoxRowFlexStart,
  StylBoxRowPadding,
  StylBoxRowMargin,
  StylBoxSelect,
  StylBoxViewContent,
};
