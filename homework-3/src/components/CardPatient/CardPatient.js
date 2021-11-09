import React from 'react';
import BoxCardPatient from './StylBoxCardPatient';
import BoxDoctor from '../common/Boxes/StylBoxDoctor';
import BoxDataPatient from '../BoxDataPatient';
import BoxInfoPatient from '../BoxInfoPatients';
import BoxRow from './StylBoxRowLine';
import BoxColumnInfo from './StylBoxColumnInfo';
import BoxImgPatient from './StylBoxImgPatient';
import TitleCard from './StylTitleCard';
import SubTitleCard from './StylSubTitleCard';
import BtnMore from '../BtnMore';

const CardPatient = ({ name, data, info, img, statusText, status, alt }) => {
  return (
    <BoxCardPatient>
      <BoxRow>
        <BoxDoctor>
          <BoxImgPatient src={img} alt={alt} />
          <BoxColumnInfo>
            <TitleCard>{name}</TitleCard>
            <SubTitleCard>{statusText}</SubTitleCard>
          </BoxColumnInfo>
        </BoxDoctor>
        <BtnMore />
      </BoxRow>
      <BoxDataPatient data={data} />
      <BoxInfoPatient info={info} />
    </BoxCardPatient>
  );
};

export default CardPatient;
