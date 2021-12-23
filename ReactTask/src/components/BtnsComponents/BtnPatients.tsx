import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IBtnPatients } from '../../modules/Btns.modle';

const Btn = styled(NavLink)`
  cursor: pointer;
  max-width: 120px;
  min-height: 40px;
  width: 100%;
  padding: 12px 0;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.second};
  background-color: ${(props) => props.theme.palette.main};
  line-height: 130%;
  border-radius: 8px;
  box-shadow: 0px 4px 32px rgb(218 228 255 / 16%);
  transition: all 0.2s ease;
  border: none;
  outline: none;

  &.active {
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  @media (min-width: 768px) {
    max-width: 160px;
    margin-right: 24px;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: rgba(114, 151, 255, 0.5);
      color: ${(props) => props.theme.palette.main};
    }
  }
`;

const BtnPatients: FunctionComponent<IBtnPatients> = ({ text, path }) => {
  return <Btn to={path}>{text}</Btn>;
};

export default BtnPatients;
