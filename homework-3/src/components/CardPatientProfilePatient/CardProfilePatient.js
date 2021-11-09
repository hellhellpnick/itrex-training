import React from 'react';
import BoxCardPatient from './../CardPatientProfileDoctor/StylBoxCardPatient';
import BoxDoctor from '../common/Boxes/StylBoxDoctor';
import BoxDataPatient from '../Boxes/BoxDataPatient';
import BoxInfoPatient from '../Boxes/BoxInfoPatients';
import BoxRow from './../CardPatientProfileDoctor/StylBoxRowLine';
import BoxColumnInfo from './../CardPatientProfileDoctor/StylBoxColumnInfo';
import BoxImgPatient from './../CardPatientProfileDoctor/StylBoxImgPatient';
import TitleCard from './../CardPatientProfileDoctor/StylTitleCard';
import SubTitleCard from './StylSubTitleCardPatient';
import BtnMore from './../BtnsComponents/BtnMore';
import heartImg from './../../img/icons/heart.png';

const CardProfilePatient = ({ name, data, info, img, statusText, alt }) => {
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
      <BoxInfoPatient info={info} imgWay={heartImg} />
    </BoxCardPatient>
  );
};

export default CardProfilePatient;
