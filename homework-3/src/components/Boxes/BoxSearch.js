import React from 'react';
import {StylBoxRowMargin} from './../common/Boxes/';
import {StylBtnSearch} from './../common/Btns/';
import {StylInputSearchPatient} from './../common/partsOfTheForm/';
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
