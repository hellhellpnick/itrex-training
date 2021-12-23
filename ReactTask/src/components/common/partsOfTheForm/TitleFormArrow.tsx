import React, { FunctionComponent, ReactNode } from 'react';
import { StylArrowFromForm, StylLinkPage } from './index';
import arrowImgSvg from './../../../assets/icons/icon-arrow-right.svg';
import { NavLink } from 'react-router-dom';
import { routes } from './../../../Router';

interface ITitleFormArrow {
  link?: ReactNode;
  path: string;
}

const TitleFormArrow: FunctionComponent<ITitleFormArrow> = ({ link, path }) => {
  return (
    <StylLinkPage path={path} link={link}>
      <NavLink to={routes.signInPage}>
        <StylArrowFromForm src={arrowImgSvg} />
      </NavLink>
    </StylLinkPage>
  );
};

export default TitleFormArrow;
