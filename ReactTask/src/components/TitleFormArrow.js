import React from 'react';
import { StylArrowFromForm, StylLinkPage } from './index';
import arrowImg from './../img/icons/icon-arrow-right.svg';

const TitleFormArrow = ({ link, path }) => {
  return (
    <StylLinkPage
      path='/signIn'
      link={<StylArrowFromForm src={arrowImg} />}
    ></StylLinkPage>
  );
};

export default TitleFormArrow;
