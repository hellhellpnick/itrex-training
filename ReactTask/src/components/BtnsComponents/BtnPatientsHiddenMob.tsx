import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IBtnPatients } from '../../modules/Btns.modle';

const Btn = styled(NavLink)`
  display: none;

  @media (min-width: 1024px) {
    cursor: pointer;
    display: block;
    max-width: 160px;
    min-height: 40px;
    width: 100%;
    padding: 12px 0;
    font-size: 15px;
    font-weight: 600;
    font-family: ${(props) => props.theme.typography.textFamily.main};
    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.palette.text.second};
    background-color: ${(props) => props.theme.palette.main};
    line-height: 130%;
    border-radius: 8px;
    box-shadow: 0px 4px 32px rgb(218 228 255 / 16%);
    border: none;
    outline: none;
    transition: all 0.2s ease;

    &.active {
      color: ${(props) => props.theme.palette.main};
      background-color: ${(props) => props.theme.palette.backgroundBtn.main};
    }

    @media (min-width: 1024px) {
      &:hover {
        background-color: rgba(114, 151, 255, 0.5);
        color: ${(props) => props.theme.palette.main};
      }
    }
  }
`;

const BtnPatientsHiddenMob: FunctionComponent<IBtnPatients> = ({
  text,
  path,
}) => {
  return <Btn to={path}>{text}</Btn>;
};

export default BtnPatientsHiddenMob;
