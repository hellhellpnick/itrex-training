import React from 'react';
import BoxRow from './../common/Boxes/StylBoxRowMargin';
import filterImg from './../../img/icons/filter.png';
import arrowImg from './../../img/icons/arrow-up.png';
import BtnFilter from './../common/Btns/StylBtnFilter';
import FilterPatients from './../common/StylFilterPatients';
import TextFilterPatient from './../common/Text/StylTextFilterPatient';
import FilterTypePatient from './../common/StylFilterTypePatient';
import ElementSelect from './../common/StylElementSelect';
import BoxSelect from './../common/Boxes/StylBoxSelect';

const BoxFilter = ({ text, filter }) => {
  const [isHidden, setHidden] = React.useState(false);

  const handleSelect = () => {
    setHidden(!isHidden);
  };

  return (
    <BoxRow>
      <BtnFilter type='button' onClick={handleSelect}>
        <FilterPatients src={filterImg} alt='filter' />
        <TextFilterPatient>
          {text} <FilterTypePatient> {filter} </FilterTypePatient>
          <img src={arrowImg} alt='arrow' />
        </TextFilterPatient>

        <BoxSelect hidden={isHidden}>
          <ElementSelect>Date</ElementSelect>
          <ElementSelect>Name</ElementSelect>
        </BoxSelect>
      </BtnFilter>
    </BoxRow>
  );
};

export default BoxFilter;
