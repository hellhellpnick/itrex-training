import React from 'react';
import {
  StylBoxRowMargin,
  StylBtnSearch,
  StylInputSearchPatient,
} from './../index';
import searchImg from './../../img/icons/search.png';

const BoxSearch = () => {
  return (
    <StylBoxRowMargin>
      <StylBtnSearch type='button'>
        <img src={searchImg} alt='search' />
        <StylInputSearchPatient type='text' placeholder='Search' />
      </StylBtnSearch>
    </StylBoxRowMargin>
  );
};

export default BoxSearch;
