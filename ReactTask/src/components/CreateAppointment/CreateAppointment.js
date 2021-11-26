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

import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { getAvailableTime } from '../../redux/patient/patientOperations';

const CreateAppointment = ({ switchContent }) => {
  const { createPatient } = useActionsWithRedux();
  const [isChooseAllData, setChooseAllData] = useState(false),
    [isFilledData, setFilledData] = useState(false),
    [isPossibleTimeArr, setPossibleTimeArr] = useState([]),
    [isTimeSelect, setTimeSelect] = useState(''),
    [isChooseUser, setChooseUser] = useState(''),
    [isDoctorChoose, setDoctorChoose] = useState('');

  useEffect(() => {
    getAvailableTime(isDoctorChoose, isChooseUser).then((response) => {
      setPossibleTimeArr(response.data);
    });
  }, [isDoctorChoose, isChooseUser]);

  useEffect(() => {
    isFilledData && isTimeSelect && isChooseUser
      ? setChooseAllData(true)
      : setChooseAllData(false);
  }, [isFilledData, isTimeSelect, isChooseUser]);

  const changeDataChoose = (data) => {
    setChooseUser(data);
  };

  const chageDoctorChoose = (doctor) => {
    setDoctorChoose(doctor);
  };

  const createAppointmentUser = () => {
    const obj = {
      date: isChooseUser,
      reason: isTimeSelect,
      note: '',
      doctorID: isDoctorChoose,
    };

    createPatient(obj);
    switchContent();
  };

  return (
    <StylBoxPatientContent>
      <HeaderCreateAppointment />
      <StylChooseDateAndTimeVisitDoctor>
        <InputsAppointment
          setFilledData={setFilledData}
          setDoctorChoose={chageDoctorChoose}
        />
        <StylItemChooseDoctor contentText='Choose a day for an appointment'>
          <StylBoxColumnFlexMargin dataReady={isFilledData}>
            <CalendarVisitDoctor changeData={changeDataChoose} />
          </StylBoxColumnFlexMargin>
        </StylItemChooseDoctor>
        <StylItemChooseDoctor contentText='Select an available timeslot'>
          <StylBoxColumnFlexMargin dataReady={isFilledData}>
            <StylBoxChooseTime>
              {isPossibleTimeArr.map((item, index) => {
                const time = new Date(item);
                const hour = time.getHours();
                const minutes = time.getMinutes();

                return (
                  <StylBtnChooseTimeVisitDoctor
                    key={index}
                    type='button'
                    isSelected={isTimeSelect === hour + ':' + minutes + '0'}
                    onClick={(e) => setTimeSelect(e.currentTarget.innerHTML)}
                  >
                    {hour + ':' + minutes + '0'}
                  </StylBtnChooseTimeVisitDoctor>
                );
              })}
            </StylBoxChooseTime>
          </StylBoxColumnFlexMargin>
        </StylItemChooseDoctor>
      </StylChooseDateAndTimeVisitDoctor>

      <StylBtnSubmitFormVisitDoctor
        isDisabled={isChooseAllData === false}
        onClick={createAppointmentUser}
      >
        Submit
      </StylBtnSubmitFormVisitDoctor>
    </StylBoxPatientContent>
  );
};

export default CreateAppointment;
