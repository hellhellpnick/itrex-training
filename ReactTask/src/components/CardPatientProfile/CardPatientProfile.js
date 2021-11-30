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

const CardPatientProfile = ({
  imgIconDescription,
  visitDate,
  reason,
  note,
  doctor,
  status,
  alt = 'photo patient',
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
          <StylBoxImgPatient src={doctor.photo} alt={alt} />
          <StylBoxColumnInfo>
            <StylTitleCard>
              {doctor.first_name} {doctor.last_name}
            </StylTitleCard>
            <StylSubTitleCard status={status}>{status}</StylSubTitleCard>
          </StylBoxColumnInfo>
        </StylBoxDoctor>
        <StylBtnMore onClick={showMore}>
          <StylBoxMenuCard showMore={isMore}>
            <StylBtnChooseAction onClick={showMore}>
              Create a resolution
            </StylBtnChooseAction>
            <StylBtnChooseAction onClick={showMore}>
              Edit an appontment
            </StylBtnChooseAction>
            <StylBtnChooseAction err={true} onClick={removeCard}>
              Delete
            </StylBtnChooseAction>
          </StylBoxMenuCard>
        </StylBtnMore>
      </StylBoxRowLine>
      <BoxDataPatient data={visitDate} />
      <BoxInfoPatient info={`${reason} ${note}`} imgWay={imgIconDescription} />
    </StylBoxCardPatient>
  );
};

export default CardPatientProfile;
