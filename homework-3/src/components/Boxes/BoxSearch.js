import React from 'react';
import BoxRow from './../common/Boxes/StylBoxRowMargin';
import searchImg from './../../img/icons/search.png';
import BtnSearch from './../common/Btns/StylBtnSearch';
import InputSearchPatient from './../common/partsOfTheForm/StylInputSearchPatient';

const BoxSearch = () => {
  return (
    <BoxRow>
      <BtnSearch type='button'>
        <img src={searchImg} alt='search' />
        <InputSearchPatient type='text' placeholder='Search' />
      </BtnSearch>
    </BoxRow>
  );
};

export default BoxSearch;
