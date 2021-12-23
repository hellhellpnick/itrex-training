import styled from 'styled-components';
import iconUserSvg from './../../assets/icons/icon-user.svg';
import iconCloseSvg from './../../assets/icons/icon-close-grey.svg';
import iconScheduleSvg from './../../assets/icons/icon-shedule.svg';
import iconCheckSvg from './../../assets/icons/icon-check-white.svg';

interface IStylBoxCenterResolutionForm {
  showResolution: boolean;
}

interface IStylBtnActionForm {
  statusForm: boolean;
}

const StylBoxCenterResolutionForm = styled.form<IStylBoxCenterResolutionForm>`
  position: absolute;
  display: ${(props) => (props.showResolution ? 'flex' : 'none')};
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-width: 560px;
  width: 100%;
  padding: 40px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.palette.main};
  box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const StylTitleResolutionForm = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.second};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 24px;
  margin-bottom: 26px;
`;

const StylNamePersonResolutionForm = styled.p`
  position: relative;
  padding-left: 38px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.second};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 24px;
  margin-bottom: 26px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 3px;
    left: 0;
    width: 20px;
    height: 20px;

    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${iconUserSvg});
  }
`;

const StylTitleTextArea = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  margin-bottom: 16px;
`;

const StylTextAreaResolution = styled.textarea`
  padding: 16px 24px 16px 28px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  margin-bottom: 40px;
  min-height: 160px;
  resize: none;
  outline: none;

  border: 1px solid ${(props) => props.theme.palette.border.main};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;

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
`;

const StylRowFormBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StylBtnCloseForm = styled.button`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.second};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  background-color: ${(props) => props.theme.palette.main};
  border: 1px solid ${(props) => props.theme.palette.border.main};
  border-radius: 8px;

  padding: 15px 16px 15px 48px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 16px;
    left: 20px;
    width: 20px;
    height: 20px;
    transfrom: translateY(-50%);
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${iconCloseSvg});
  }
`;

const StylBtnActionForm = styled.button<IStylBtnActionForm>`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.second};
  color: ${(props) => props.theme.palette.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  border: 1px solid transparent;
  border-radius: 8px;

  padding: 15px 16px 15px 48px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: ${(props) => (props.statusForm ? '55%' : '60%')};
    left: 20px;
    width: 20px;
    height: 30px;
    transform: translateY(-50%);
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${(props) =>
      props.statusForm ? iconScheduleSvg : iconCheckSvg});
  }
`;

export {
  StylBoxCenterResolutionForm,
  StylTitleResolutionForm,
  StylNamePersonResolutionForm,
  StylTitleTextArea,
  StylTextAreaResolution,
  StylRowFormBtns,
  StylBtnCloseForm,
  StylBtnActionForm,
};
