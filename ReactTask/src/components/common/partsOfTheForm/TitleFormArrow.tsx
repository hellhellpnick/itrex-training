import React, { FunctionComponent, ReactNode } from 'react';
import { StylArrowFromForm, StylLinkPage } from './index';
import arrowImgSvg from './../../../img/icons/icon-arrow-right.svg';

interface ITitleFormArrow {
  link: ReactNode;
  path: string;
}

const TitleFormArrow: FunctionComponent<ITitleFormArrow> = ({ link, path }) => {
  return (
    <StylLinkPage
      path={path}
      link={<StylArrowFromForm src={arrowImgSvg} />}
    ></StylLinkPage>
  );
};

export default TitleFormArrow;
