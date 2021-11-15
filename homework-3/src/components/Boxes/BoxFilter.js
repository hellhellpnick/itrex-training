import React, { useState } from 'react';
import {
  StylFilterTypePatient,
  StylElementSelect,
  StylFilterPatients,
  StylBoxSelect,
  StylBoxRowMargin,
  StylBtnFilter,
  StylTextFilterPatient,
} from './../index';

import filterImg from './../../img/icons/filter.png';
import arrowImg from './../../img/icons/arrow-up.png';

const BoxFilter = ({ text, filter }) => {
  const [isHidden, setHidden] = useState(false);

  const handleSelect = () => {
    setHidden(!isHidden);
  };

  return (
    <StylBoxRowMargin>
      <StylBtnFilter type='button' onClick={handleSelect}>
        <StylFilterPatients src={filterImg} alt='filter' />
        <StylTextFilterPatient>
          {text}
          <StylFilterTypePatient> {filter} </StylFilterTypePatient>
          <img src={arrowImg} alt='arrow' />
        </StylTextFilterPatient>

        <StylBoxSelect hidden={isHidden}>
          <StylElementSelect>Date</StylElementSelect>
          <StylElementSelect>Name</StylElementSelect>
        </StylBoxSelect>
      </StylBtnFilter>
    </StylBoxRowMargin>
  );
};

export default BoxFilter;
