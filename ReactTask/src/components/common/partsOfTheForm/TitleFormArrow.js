import React from 'react';
import { StylArrowFromForm, StylLinkPage } from './index';
import arrowImgSvg from './../../../img/icons/icon-arrow-right.svg';

const TitleFormArrow = ({ link, path }) => {
  return (
    <StylLinkPage
      path={path}
      link={<StylArrowFromForm src={arrowImgSvg} />}
    ></StylLinkPage>
  );
};

export default TitleFormArrow;
