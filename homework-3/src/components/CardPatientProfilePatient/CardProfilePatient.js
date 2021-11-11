import React from 'react';
import { BoxInfoPatient, BoxDataPatient } from '../Boxes/';
import {
  StylBoxCardPatient,
  StylBoxImgPatient,
  StylBoxColumnInfo,
  StylBoxRowLine,
  StylTitleCard,
} from './../CardPatientProfileDoctor/';
import { StylSubTitleCardPatient } from './index';
import { BtnMore } from './../BtnsComponents/';
import { StylBoxDoctor } from '../common/Boxes/';
import { StylBoxPatientsList } from './../../components/common/Boxes/';
import heartImg from './../../img/icons/heart.png';

const CardProfilePatient = ({ data }) => {
  return (
    <StylBoxPatientsList>
      {data[0].map((item) => (
        <StylBoxCardPatient>
          <StylBoxRowLine>
            <StylBoxDoctor>
              <StylBoxImgPatient src={item.img} alt={item.alt} />
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
