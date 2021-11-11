import React from 'react';
import { LinkPage } from './';
import { StylArrowFromForm } from './common/partsOfTheForm/';
import arrowImg from './../img/icons/icon-arrow-right.svg';

const TitleFormArrow = ({ link, path }) => {
  return (
    <LinkPage
      path='/signIn'
      link={<StylArrowFromForm src={arrowImg} />}
    ></LinkPage>
  );
};

export default TitleFormArrow;
