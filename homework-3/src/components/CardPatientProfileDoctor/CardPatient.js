import React from 'react';
import BoxCardPatient from './StylBoxCardPatient';
import BoxDoctor from '../common/Boxes/StylBoxDoctor';
import BoxDataPatient from '../Boxes/BoxDataPatient';
import BoxInfoPatient from '../Boxes/BoxInfoPatients';
import BoxRow from './StylBoxRowLine';
import BoxColumnInfo from './StylBoxColumnInfo';
import BoxImgPatient from './StylBoxImgPatient';
import TitleCard from './StylTitleCard';
import SubTitleCard from './StylSubTitleCard';
import BtnMore from './../BtnsComponents/BtnMore';
import scheduleImg from './../../img/icons/schedule.png';

const CardPatient = ({ name, data, info, img, statusText, status, alt }) => {
  return (
    <BoxCardPatient>
      <BoxRow>
        <BoxDoctor>
          <BoxImgPatient src={img} alt={alt} />
          <BoxColumnInfo>
            <TitleCard>{name}</TitleCard>
            <SubTitleCard status={status}>{statusText}</SubTitleCard>
          </BoxColumnInfo>
        </BoxDoctor>
        <BtnMore />
      </BoxRow>
      <BoxDataPatient data={data} />
      <BoxInfoPatient info={info} imgWay={scheduleImg} />
    </BoxCardPatient>
  );
};

export default CardPatient;
