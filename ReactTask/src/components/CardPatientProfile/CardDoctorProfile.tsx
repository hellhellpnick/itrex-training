import { useState, createRef, FunctionComponent } from 'react';
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

import { ICardPatientProfile } from '../../modules/CardPatientProfile.model';
import { deleteAppointment } from '../../redux/doctor/doctorOperation';

const CardDoctorProfile: FunctionComponent<ICardPatientProfile> = ({
  imgIconDescription,
  item,
}) => {
  const [isMore, setMore] = useState(false);
  const boxEl = createRef<HTMLDivElement>();

  const showMore = () => {
    setMore(!isMore);
  };

  const removeCard = () => {
    boxEl.current!.remove();
    deleteAppointment(item.id)
  };

  return (
    <StylBoxCardPatient ref={boxEl} data-testid={item.id} id={item.id}>
      <StylBoxRowLine>
        <StylBoxDoctor>
          <StylBoxImgPatient
            src={item.patient.photo}
            alt={item.patient.last_name}
          />
          <StylBoxColumnInfo>
            <StylTitleCard>
              {item.patient.first_name} {item.patient.last_name}
            </StylTitleCard>
            <StylSubTitleCard status={item.status}>
              {item.status}
            </StylSubTitleCard>
          </StylBoxColumnInfo>
        </StylBoxDoctor>
        <StylBtnMore onClick={showMore}>
          <StylBoxMenuCard showMore={isMore}>
            <StylBtnChooseAction onClick={showMore} type='button'>
              Create a resolution
            </StylBtnChooseAction>
            <StylBtnChooseAction onClick={showMore} type='button'>
              Edit an appontment
            </StylBtnChooseAction>
            <StylBtnChooseAction err={true} onClick={removeCard}>
              Delete
            </StylBtnChooseAction>
          </StylBoxMenuCard>
        </StylBtnMore>
      </StylBoxRowLine>
      <BoxDataPatient data={item.visit_date} />
      <BoxInfoPatient
        info={`${item.reason} ${item.note}`}
        imgWay={imgIconDescription}
      />
    </StylBoxCardPatient>
  );
};

export default CardDoctorProfile;
