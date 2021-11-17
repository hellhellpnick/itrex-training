import React from 'react';
import {
  BoxInfoPatient,
  BoxDataPatient,
  StylBoxCardPatient,
  StylBoxImgPatient,
  StylBoxColumnInfo,
  StylBoxRowLine,
  StylTitleCard,
  StylSubTitleCardPatient,
  BtnMore,
  StylBoxDoctor,
  StylBoxPatientsList,
} from '../index.js';
import heartImg from './../../img/icons/heart.png';

const CardProfilePatient = ({ dataPatients, imgPatientsArr }) => {
  return (
    <StylBoxPatientsList>
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
                <StylSubTitleCardPatient>
                  {item.statusText}
                </StylSubTitleCardPatient>
              </StylBoxColumnInfo>
            </StylBoxDoctor>
            <BtnMore />
          </StylBoxRowLine>
          <BoxDataPatient data={item.data} />
          <BoxInfoPatient info={item.info} imgWay={heartImg} />
        </StylBoxCardPatient>
      ))}
    </StylBoxPatientsList>
  );
};

export default CardProfilePatient;
