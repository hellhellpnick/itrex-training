import  { FunctionComponent } from 'react';
import {
  StylBoxRowMargin,
  StylBtnSearch,
  StylInputSearchPatient,
} from '../index';
import searchImgSvg from './../../assets/icons/icon-search.svg';

const BoxSearch: FunctionComponent = () => {
  return (
    <StylBoxRowMargin>
      <StylBtnSearch type='button' imgSearch={searchImgSvg}>
        <StylInputSearchPatient type='text' placeholder='Search' />
      </StylBtnSearch>
    </StylBoxRowMargin>
  );
};

export default BoxSearch;
