import React, { useEffect, useState } from 'react';
import {
  StylBoxRowPadding,
  StylBoxPatients,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxColumnFlex,
  StylBoxPatientContent,
  StylBoxBtnPatients,
  StylBoxRow,
  BtnPatientsHiddenMob,
  BtnCreateAppointment,
  BtnPatients,
  StylSubTitlePosition,
  StylTitlePatients,
  StylTitleName,
  AvatarActive,
  CardProfilePatient,
  BoxFilter,
  StylTitlePatientAppointment,
  StylTitleCurrentPatientAppointment,
  StylBoxRowFlexStart,
  StylChooseDateAndTimeVisitDoctor,
  StylItemChooseDoctor,
  StylTitleVisitDoctor,
  StylInputVisitDoctor,
  StylArrowVisitDoctor,
  StylBoxMenuSelectVisitDoctor,
  StylElementSelectVisitDoctor,
  StylBoxColumnFlexMargin,
  CalendarVisitDoctor,
  StylBoxChooseTime,
  StylBtnChooseTimeVisitDoctor,
  StylBtnSubmitFormVisitDoctor,
} from '../components/';

import patient from '../img/avatars/avatar-patient.png';
import patient1 from '../img/avatars/patients-13.png';
import logo from '../img/logo.png';
import data from './../db/dbProfilePatient.json';
import {
  nameDoctorsArr,
  ocuppationDoctorArr,
  possibleTimeArr,
} from './../constants/index';

const PatientProfile = ({ title }) => {
  const dbData = [data],
    imgArr = [patient1, patient1, patient1],
    [isHiddenAppointment, setHiddenAppointment] = useState(false),
    [isFocusInput, setFocusInput] = useState(false),
    [isFocusInputName, setFocusInputName] = useState(false),
    [isValueInputOccupation, setValueInputOccupation] = useState(''),
    [isValueInputName, setValueInputName] = useState(''),
    [isFilledData, setFilledData] = useState(false),
    [isTimeSelect, setTimeSelect] = useState(''),
    [isChooseAllData, setChooseAllData] = useState(false);

  let isDataChoose = '';

  useEffect(() => {
    document.title = title || '';
  }, [title]);

  useEffect(() => {
    isValueInputName && isValueInputOccupation
      ? setFilledData(true)
      : setFilledData(false);
  }, [isValueInputOccupation, isValueInputName]);

  useEffect(() => {
    isFilledData && isTimeSelect && isDataChoose
      ? setChooseAllData(true)
      : setChooseAllData(false);
  }, [isFilledData, isTimeSelect, isDataChoose]);

  const handleContent = () => {
    setHiddenAppointment(!isHiddenAppointment);
  };

  const changeDataChoose = (data) => {
    isDataChoose = data;
  };

  const chooseOccupationDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;

    setTimeout(() => {
      setValueInputOccupation(selectData);
      setFocusInput(false);
    }, 200);
  };

  const chooseNameDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;

    setTimeout(() => {
      setValueInputName(selectData);
      setFocusInputName(false);
    }, 200);
  };

  return (
    <StylBoxPatients>
      <StylBoxRow>
        <img src={logo} alt='logo' />
        <StylBoxDoctor>
          <StylBoxFlexColumn>
            <StylTitleName>Larry Prinston</StylTitleName>
            <StylSubTitlePosition>Patient</StylSubTitlePosition>
          </StylBoxFlexColumn>
          <AvatarActive src={patient} alt='avatar-user' />
        </StylBoxDoctor>
      </StylBoxRow>
      <StylBoxPatientContent hiddenMode={isHiddenAppointment}>
        <StylBoxBtnPatients>
          <BtnPatients active={false} text='Profile' />
          <BtnPatients active={true} text='Appointments  ' />
          <BtnPatientsHiddenMob active={false} text='Resolutions  ' />
        </StylBoxBtnPatients>
        <StylBoxRowPadding>
          <StylTitlePatients>My Appointments</StylTitlePatients>
          <StylBoxDoctor>
            <BoxFilter text='Show: ' filter='Upcoming' />
            <BtnCreateAppointment cliclChangeBox={handleContent} />
          </StylBoxDoctor>
        </StylBoxRowPadding>
        {!!dbData.length && (
          <CardProfilePatient
            dataPatients={dbData[0]}
            imgPatientsArr={imgArr}
          />
        )}
      </StylBoxPatientContent>

      <StylBoxPatientContent hiddenMode={!isHiddenAppointment}>
        <StylBoxRowFlexStart>
          <StylTitlePatientAppointment>Doctor</StylTitlePatientAppointment>
          <StylTitleCurrentPatientAppointment>
            Make an appointment
          </StylTitleCurrentPatientAppointment>
        </StylBoxRowFlexStart>
        <StylBoxRowPadding>
          <StylTitlePatients>Make an appointment</StylTitlePatients>
        </StylBoxRowPadding>
        <StylChooseDateAndTimeVisitDoctor>
          <StylItemChooseDoctor contentText='Select a doctor and define the reason of your visitt'>
            <StylBoxColumnFlexMargin dataReady={true}>
              <StylTitleVisitDoctor>Occupation</StylTitleVisitDoctor>
              <StylBoxColumnFlex>
                <StylArrowVisitDoctor focusSelect={isFocusInput} />
                <StylInputVisitDoctor
                  value={isValueInputOccupation}
                  onChange={(e) => setValueInputOccupation(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      if (
                        !ocuppationDoctorArr.includes(isValueInputOccupation)
                      ) {
                        console.log();
                        setValueInputOccupation('');
                      }

                      setFocusInput(false);
                    }, 100);
                  }}
                  onFocus={() => setFocusInput(true)}
                />
                <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInput}>
                  {ocuppationDoctorArr.map((item, index) => (
                    <StylElementSelectVisitDoctor
                      key={index}
                      onClick={chooseOccupationDoctor}
                    >
                      {item}
                    </StylElementSelectVisitDoctor>
                  ))}
                </StylBoxMenuSelectVisitDoctor>
              </StylBoxColumnFlex>
            </StylBoxColumnFlexMargin>
            <StylBoxColumnFlexMargin dataReady={true}>
              <StylTitleVisitDoctor>Doctor’s Name</StylTitleVisitDoctor>
              <StylBoxColumnFlex>
                <StylArrowVisitDoctor focusSelect={isFocusInputName} />
                <StylInputVisitDoctor
                  value={isValueInputName}
                  onChange={(e) => setValueInputName(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      if (!nameDoctorsArr.includes(isValueInputName)) {
                        setValueInputName('');
                      }

                      setFocusInputName(false);
                    }, 100);
                  }}
                  onFocus={() => setFocusInputName(true)}
                />
                <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInputName}>
                  {nameDoctorsArr.map((item, index) => (
                    <StylElementSelectVisitDoctor
                      onClick={chooseNameDoctor}
                      key={index}
                    >
                      {item}
                    </StylElementSelectVisitDoctor>
                  ))}
                </StylBoxMenuSelectVisitDoctor>
              </StylBoxColumnFlex>
            </StylBoxColumnFlexMargin>
            <StylBoxColumnFlexMargin dataReady={true}>
              <StylTitleVisitDoctor>Note</StylTitleVisitDoctor>
              <StylBoxColumnFlex>
                <StylInputVisitDoctor placeholder='Leave a note if needed' />
              </StylBoxColumnFlex>
            </StylBoxColumnFlexMargin>
          </StylItemChooseDoctor>
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
          onClick={handleContent}
        >
          Submit
        </StylBtnSubmitFormVisitDoctor>
      </StylBoxPatientContent>
    </StylBoxPatients>
  );
};

export default PatientProfile;
