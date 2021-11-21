import React, { useState, useEffect } from 'react';

import {
  StylBoxPatientContent,
  StylChooseDateAndTimeVisitDoctor,
  StylItemChooseDoctor,
  StylBoxColumnFlexMargin,
  CalendarVisitDoctor,
  StylBoxChooseTime,
  StylBtnChooseTimeVisitDoctor,
  StylBtnSubmitFormVisitDoctor,
  HeaderCreateAppointment,
  InputsAppointment,
} from './../';

import { possibleTimeArr } from './../../constants/index';

const CreateAppointment = ({ switchContent }) => {
  const [isChooseAllData, setChooseAllData] = useState(false),
    [isFilledData, setFilledData] = useState(false),
    [isTimeSelect, setTimeSelect] = useState(''),
    [isChooseUser, setChooseUser] = useState('');

  useEffect(() => {
    isFilledData && isTimeSelect && isChooseUser
      ? setChooseAllData(true)
      : setChooseAllData(false);
  }, [isFilledData, isTimeSelect, isChooseUser]);

  const changeDataChoose = (data) => {
    setChooseUser(data);
  };

  return (
    <StylBoxPatientContent>
      <HeaderCreateAppointment />
      <StylChooseDateAndTimeVisitDoctor>
        <InputsAppointment setFilledData={setFilledData} />
        <StylItemChooseDoctor contentText='Choose a day for an appointment'>
          <StylBoxColumnFlexMargin dataReady={isFilledData}>
            <CalendarVisitDoctor changeData={changeDataChoose} />
          </StylBoxColumnFlexMargin>
        </StylItemChooseDoctor>
        <StylItemChooseDoctor contentText='Select an available timeslot'>
          <StylBoxColumnFlexMargin dataReady={isFilledData}>
            <StylBoxChooseTime>
              {possibleTimeArr.map((item, index) => (
                <StylBtnChooseTimeVisitDoctor
                  key={index}
                  type='button'
                  isSelected={isTimeSelect === item}
                  isDisabled={
                    item === '2:00 pm' || item === '6:00 pm' ? true : false
                  }
                  onClick={(e) => setTimeSelect(e.currentTarget.innerHTML)}
                >
                  {item}
                </StylBtnChooseTimeVisitDoctor>
              ))}
            </StylBoxChooseTime>
          </StylBoxColumnFlexMargin>
        </StylItemChooseDoctor>
      </StylChooseDateAndTimeVisitDoctor>

      <StylBtnSubmitFormVisitDoctor
        isDisabled={isChooseAllData === false}
        onClick={switchContent}
      >
        Submit
      </StylBtnSubmitFormVisitDoctor>
    </StylBoxPatientContent>
  );
};

export default CreateAppointment;
