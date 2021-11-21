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

const CardPatientProfile = ({ dataPatients, imgIconDescription }) => {
  return (
    <StylBoxPatientsList>
      {dataPatients.map(
        ({ id, img, alt, name, status, statusText, data, info }) => (
          <StylBoxCardPatient key={id}>
            <StylBoxRowLine>
              <StylBoxDoctor>
                <StylBoxImgPatient src={img} alt={alt} />
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
        )
      )}
    </StylBoxPatientsList>
  );
};

export default CardPatientProfile;
