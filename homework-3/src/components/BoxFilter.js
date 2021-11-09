import React from 'react';
import BoxRow from './common/Boxes/StylBoxRowMargin';
import filterImg from './../img/icons/filter.png';
import arrowImg from './../img/icons/arrow-up.png';
import BtnFilter from './StylBtnFilter';
import FilterPatients from './common/StylFilterPatients';
import TextFilterPatient from './common/StylTextFilterPatient';
import FilterTypePatient from './common/StylFilterTypePatient';

const BoxFilter = ({ text, filter }) => {
  return (
    <BoxRow>
      <BtnFilter type='button'>
        <FilterPatients src={filterImg} alt='filter' />
        <TextFilterPatient>
          {text} <FilterTypePatient> {filter} </FilterTypePatient>
          <img src={arrowImg} alt='arrow' />
        </TextFilterPatient>
      </BtnFilter>
    </BoxRow>
  );
};

export default BoxFilter;
