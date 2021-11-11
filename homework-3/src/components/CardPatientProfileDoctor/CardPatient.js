import React from 'react';
import {
  StylSubTitleCard,
  StylTitleCard,
  StylBoxImgPatient,
  StylBoxColumnInfo,
  StylBoxRowLine,
  StylBoxCardPatient,
} from './index';

import BoxDoctor from '../common/Boxes/StylBoxDoctor';
import BoxDataPatient from '../Boxes/BoxDataPatient';
import BoxInfoPatient from '../Boxes/BoxInfoPatients';
import BtnMore from './../BtnsComponents/BtnMore';

import scheduleImg from './../../img/icons/schedule.png';
import BoxPatientsList from './../../components/common/Boxes/StylBoxPatientsList';

const CardPatient = ({ data }) => {
  console.log(data[0]);
  return (
    <BoxPatientsList>
      {data[0].map((item) => (
        <StylBoxCardPatient key={item.id}>
          <StylBoxRowLine>
            <BoxDoctor>
              <StylBoxImgPatient src={item.img} alt={item.alt} />
              <StylBoxColumnInfo>
                <StylTitleCard>{item.name}</StylTitleCard>
                <StylSubTitleCard status={item.status}>
                  {item.statusText}
                </StylSubTitleCard>
              </StylBoxColumnInfo>
            </BoxDoctor>
            <BtnMore />
          </StylBoxRowLine>
          <BoxDataPatient data={item.data} />
          <BoxInfoPatient info={item.info} imgWay={scheduleImg} />
        </StylBoxCardPatient>
      ))}
    </BoxPatientsList>
  );
};

export default CardPatient;
