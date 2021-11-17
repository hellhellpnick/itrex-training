import React from 'react';
import {
  StylSubTitleCard,
  StylTitleCard,
  StylBoxImgPatient,
  StylBoxColumnInfo,
  StylBoxRowLine,
  StylBoxCardPatient,
  StylBoxDoctor,
  BoxDataPatient,
  BoxInfoPatient,
  BtnMore,
} from './../index';

import scheduleImg from './../../img/icons/schedule.png';
import BoxPatientsList from '../common/Boxes/StylBoxPatientsList';

const CardPatientProfileDoctor = ({ dataPatients, imgPatientsArr }) => {
  return (
    <BoxPatientsList>
      {dataPatients.map((item) => (
        <StylBoxCardPatient key={item.id}>
          <StylBoxRowLine>
            <StylBoxDoctor>
              <StylBoxImgPatient
                src={imgPatientsArr[item.id - 1]}
                alt={item.alt}
              />
              <StylBoxColumnInfo>
                <StylTitleCard>{item.name}</StylTitleCard>
                <StylSubTitleCard status={item.status}>
                  {item.statusText}
                </StylSubTitleCard>
              </StylBoxColumnInfo>
            </StylBoxDoctor>
            <BtnMore />
          </StylBoxRowLine>
          <BoxDataPatient data={item.data} />
          <BoxInfoPatient info={item.info} imgWay={scheduleImg} />
        </StylBoxCardPatient>
      ))}
    </BoxPatientsList>
  );
};

export default CardPatientProfileDoctor;
