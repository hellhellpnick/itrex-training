import React, { useState } from 'react';
import {
  StylFilterTypePatient,
  StylElementSelect,
  StylBoxSelect,
  StylBoxRowMargin,
  StylBtnFilter,
  StylTextFilterPatient,
} from './../index';

import filterImgSvg from './../../img/icons/icon-filter.svg';
import arrowImgSvg from './../../img/icons/icon-arrow-up.svg';

const BoxFilter = ({ text, filter }) => {
  const [isHidden, setHidden] = useState(false);

  const handleSelect = () => {
    setHidden(!isHidden);
  };

  return (
    <StylBoxRowMargin>
      <StylBtnFilter
        type='button'
        onClick={handleSelect}
        imgFilter={filterImgSvg}
      >
        <StylTextFilterPatient>
          {text}
          <StylFilterTypePatient imgBox={arrowImgSvg}>
            {filter}
          </StylFilterTypePatient>
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
