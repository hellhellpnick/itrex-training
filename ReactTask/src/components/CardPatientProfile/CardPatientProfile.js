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
  StylBoxPatientsList,
} from '../index';

import patient from './../../img/avatars/patients-1.png';

const CardPatientProfile = ({ dataPatients, imgIconDescription }) => {
  return (
    <StylBoxPatientsList>
      {dataPatients.map(({ id, alt, name, status, statusText, data, info }) => (
        <StylBoxCardPatient key={id}>
          <StylBoxRowLine>
            <StylBoxDoctor>
              <StylBoxImgPatient src={patient} alt={alt} />
              <StylBoxColumnInfo>
                <StylTitleCard>{name}</StylTitleCard>
                <StylSubTitleCard status={status}>
                  {statusText}
                </StylSubTitleCard>
              </StylBoxColumnInfo>
            </StylBoxDoctor>
            <BtnMore />
          </StylBoxRowLine>
          <BoxDataPatient data={data} />
          <BoxInfoPatient info={info} imgWay={imgIconDescription} />
        </StylBoxCardPatient>
      ))}
    </StylBoxPatientsList>
  );
};

export default CardPatientProfile;
