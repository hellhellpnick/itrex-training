import React from 'react';
import {
  StylBoxRowMargin,
  StylBtnSearch,
  StylInputSearchPatient,
} from './../index';
import searchImgSvg from './../../img/icons/icon-search.svg';

const BoxSearch = () => {
  return (
    <StylBoxRowMargin>
      <StylBtnSearch type='button' imgSearch={searchImgSvg}>
        <StylInputSearchPatient type='text' placeholder='Search' />
      </StylBtnSearch>
    </StylBoxRowMargin>
  );
};

export default BoxSearch;
