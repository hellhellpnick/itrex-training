import { FunctionComponent } from 'react';
import moment from 'moment';
import { StylBoxDoctor, StylBoxImgInfo, StylTextData } from '../index';
import timeImgSvg from './../../img/icons/icon-time.svg';
import { IBoxDataPatient } from '../../modules/Boxes.model';

const BoxDataPatient: FunctionComponent<IBoxDataPatient> = ({ data }) => {
  return (
    <StylBoxDoctor>
      <StylBoxImgInfo src={timeImgSvg} alt='time icon' />
      <StylTextData>
        {moment(data).format('ddd MMM D, YYYY h:mm a')}
        {' - '}
        {moment(data).add(1, 'hours').format('h:mm a')}
      </StylTextData>
    </StylBoxDoctor>
  );
};

export default BoxDataPatient;
