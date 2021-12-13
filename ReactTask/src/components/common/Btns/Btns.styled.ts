import styled from 'styled-components';
import iconDots from './../../../img/icons/icon-dots.svg';

interface IStylBtnSearch {
  imgSearch?: string;
}
interface IStylBtnForm {
  imgWay?: string;
  type?: string;
  role?: string;
}
interface IStylBtnFilter {
  imgFilter?: string;
}

const StylBtnSearch = styled.button<IStylBtnSearch>`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20px;
  height: 20px;
  margin-right: 28px;
  background-color: transparent;
  border: none;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background-image: url(${(props) => props.imgSearch});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  @media (min-width: 1024px) {
    min-width: 95px;

    &:after {
      left: -20px;
    }
  }
`;

const StylBtnMore = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  ::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${iconDots});
  }
`;

const StylBtnForm = styled.button<IStylBtnForm>`
  position: relative;
  cursor: pointer;
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
  margin-bottom: 40px;

  border: none;
  outline: none;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.main};

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    right: 10px;
    height: 20px;
    top: 56%;
    transform: translateY(-50%);
    background-image: url(${(props) => props.imgWay});
    background-repeat: no-repeat;
  }
`;

const StylBtnFilter = styled(StylBtnSearch)<IStylBtnFilter>`
  position: relative;
  margin: 0;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: url(${(props) => props.imgFilter});
    background-repeat: no-repeat;
    background-size: 100%;
  }
  @media (min-width: 1024px) {
    min-width: 160px;

    &:after {
      display: none;
    }
  }
`;

export { StylBtnSearch, StylBtnMore, StylBtnForm, StylBtnFilter };
