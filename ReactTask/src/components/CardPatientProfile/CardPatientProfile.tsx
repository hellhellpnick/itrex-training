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

import { ICardDoctorProfile } from '../../modules/CardPatientProfile.model';
import { deletePatient } from '../../redux/patient/patientOperations';

const CardPatientProfile: FunctionComponent<ICardDoctorProfile> = ({
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
    deletePatient(item.id);
  };

  return (
    <StylBoxCardPatient ref={boxEl} data-testid={item.id} id={item.id}>
      <StylBoxRowLine>
        <StylBoxDoctor>
          <StylBoxImgPatient
            src={item.doctor.photo}
            alt={item.doctor.last_name}
          />
          <StylBoxColumnInfo>
            <StylTitleCard>
              {item.doctor.first_name} {item.doctor.last_name}
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

export default CardPatientProfile;
