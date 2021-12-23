import { useState, useEffect } from 'react';
import moment from 'moment';

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
} from '..';

import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { getAvailableTime } from './../../redux/patient/patientOperations';
import { routes } from '../../Router';

const CreateAppointment = () => {
  const { createPatient } = useActionsWithRedux();
  const [isChooseAllData, setChooseAllData] = useState(false),
    [isFilledData, setFilledData] = useState(false),
    [isPossibleTimeArr, setPossibleTimeArr] = useState([]),
    [isNoteUser, setNoteUser] = useState('stomach-ache'),
    [isTimeChooseCheckbox, setTimeChooseCheckbox] = useState(''),
    [isTimeSelect, setTimeSelect] = useState(''),
    [isChooseUser, setChooseUser] = useState(''),
    [isDoctorChoose, setDoctorChoose] = useState('');

  useEffect(() => {
    getAvailableTime(isDoctorChoose, isChooseUser).then((response) =>
      setPossibleTimeArr(response.data)
    );

    isFilledData && isTimeSelect && isChooseUser
      ? setChooseAllData(true)
      : setChooseAllData(false);
  }, [isDoctorChoose, isChooseUser, isFilledData, isTimeSelect]);

  const changeDataChoose = (data: string) => {
    setChooseUser(data);
  };

  const chageDoctorChoose = (doctor: string) => {
    setDoctorChoose(doctor);
  };

  const createAppointmentUser = () => {
    const obj = {
      date: isTimeSelect,
      reason: isNoteUser,
      note: isNoteUser,
      doctorID: isDoctorChoose,
    };
    createPatient(obj);
  };

  return (
    <StylBoxPatientContent>
      <HeaderCreateAppointment />
      <StylChooseDateAndTimeVisitDoctor>
        <InputsAppointment
          setFilledData={setFilledData}
          setDoctorChoose={chageDoctorChoose}
          setNoteUser={setNoteUser}
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
                const hour = moment(time).format('hh:mm a');

                return (
                  <StylBtnChooseTimeVisitDoctor
                    key={index}
                    type='button'
                    isSelected={isTimeChooseCheckbox === hour}
                    onClick={(e) => {
                      setTimeChooseCheckbox(e.currentTarget.innerHTML);
                      setTimeSelect(item);
                    }}
                  >
                    {hour}
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
        role='btnCreateAppointment'
        to={routes.patientProfile}
      >
        Submit
      </StylBtnSubmitFormVisitDoctor>
    </StylBoxPatientContent>
  );
};

export default CreateAppointment;
