import React, { useState, useRef } from 'react';
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
  StylBtnMore,
  StylBoxMenuCard,
  StylBtnChooseAction,
} from '../index';

import patient from './../../img/avatars/patients-1.png';

const CardPatientProfile = ({
  imgIconDescription,
  alt,
  name,
  status,
  statusText,
  data,
  info,
  createAppointment,
  editAppointment,
}) => {
  const [isMore, setMore] = useState(false);
  const boxEl = useRef();

  const showMore = () => {
    setMore(!isMore);
  };

  const removeCard = () => {
    boxEl.current.remove();
  };

  return (
    <StylBoxCardPatient ref={boxEl}>
      <StylBoxRowLine>
        <StylBoxDoctor>
          <StylBoxImgPatient src={patient} alt={alt} />
          <StylBoxColumnInfo>
            <StylTitleCard>{name}</StylTitleCard>
            <StylSubTitleCard status={status}>{statusText}</StylSubTitleCard>
          </StylBoxColumnInfo>
        </StylBoxDoctor>
        <StylBtnMore onClick={showMore}>
          <StylBoxMenuCard showMore={isMore}>
            <StylBtnChooseAction onClick={createAppointment}>
              Create a resolution
            </StylBtnChooseAction>
            <StylBtnChooseAction onClick={editAppointment}>
              Edit an appontment
            </StylBtnChooseAction>
            <StylBtnChooseAction err={true} onClick={removeCard}>
              Delete
            </StylBtnChooseAction>
          </StylBoxMenuCard>
        </StylBtnMore>
      </StylBoxRowLine>
      <BoxDataPatient data={data} />
      <BoxInfoPatient info={info} imgWay={imgIconDescription} />
    </StylBoxCardPatient>
  );
};

export default CardPatientProfile;
