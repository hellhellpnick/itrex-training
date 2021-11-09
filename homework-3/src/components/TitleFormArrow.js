import React from 'react';
import LinkPage from './LinkPage';
import ArrowFromForm from './common/partsOfTheForm/StylArrowFromForm';
import arrowImg from './../img/icons/icon-arrow-right.svg';

const TitleFormArrow = ({ link, path }) => {
  return (
    <LinkPage path='/signIn' link={<ArrowFromForm src={arrowImg} />}></LinkPage>
  );
};

export default TitleFormArrow;
