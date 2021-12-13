import  { FunctionComponent } from 'react';
import { StylBtnForm } from '../index';
import arrowRightSvg from './../../img/icons/icon-arrow-right-light.svg';
import { IBtnSubmitForm } from '../../modules/Btns.modle';

const BtnSubmitForm: FunctionComponent<IBtnSubmitForm> = ({ text, role }) => {
  return (
    <StylBtnForm imgWay={arrowRightSvg} type='submit' role={role}>
      {text}
    </StylBtnForm>
  );
};

export default BtnSubmitForm;
