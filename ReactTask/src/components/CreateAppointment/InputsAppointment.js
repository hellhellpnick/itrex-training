import React, { useEffect, useState } from 'react';

import {
  StylBoxColumnFlex,
  StylItemChooseDoctor,
  StylTitleVisitDoctor,
  StylInputVisitDoctor,
  StylArrowVisitDoctor,
  StylBoxMenuSelectVisitDoctor,
  StylElementSelectVisitDoctor,
  StylBoxColumnFlexMargin,
} from './../';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';

const InputsAppointment = ({ setFilledData, setDoctorChoose, setNoteUser }) => {
  const { getAllSpecializationsDoctors, getDoctorsBySpecializationsNow } =
    useActionsWithRedux();
  const [isOcuppationDoctorArr, setOcuppationDoctorArr] = useState([]);
  const [isNameDoctorsArr, setNameDoctorsArr] = useState([]);
  const [isFocusInput, setFocusInput] = useState(false),
    [isFocusInputName, setFocusInputName] = useState(false),
    [isValueInputOccupation, setValueInputOccupation] = useState(''),
    [isValueInputName, setValueInputName] = useState('');

  getAllSpecializationsDoctors(setOcuppationDoctorArr);

  useEffect(
    () =>
      isValueInputName && isValueInputOccupation
        ? setFilledData(true)
        : setFilledData(false),
    [isValueInputName, isValueInputOccupation, setFilledData]
  );

  const chooseOccupationDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;
    const idSelect = e.currentTarget.id;

    setDoctorChoose(idSelect);
    getDoctorsBySpecializationsNow(idSelect, setNameDoctorsArr);
    setValueInputOccupation(selectData);
    setFocusInput(false);
  };

  const chooseNameDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;

    setValueInputName(selectData);
    setFocusInputName(false);
  };

  return (
    <StylItemChooseDoctor contentText='Select a doctor and define the reason of your visitt'>
      <StylBoxColumnFlexMargin dataReady={true}>
        <StylTitleVisitDoctor>Occupation</StylTitleVisitDoctor>
        <StylBoxColumnFlex>
          <StylArrowVisitDoctor focusSelect={isFocusInput} />
          <StylInputVisitDoctor
            id='occupation'
            role='occupation'
            data-testid='occupation'
            value={isValueInputOccupation}
            onFocus={() => setFocusInput(true)}
            onChange={(e) => setValueInputOccupation(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                if (!isOcuppationDoctorArr.includes(isValueInputOccupation)) {
                  setValueInputOccupation('');
                }

                setFocusInput(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInput}>
            {isOcuppationDoctorArr.map((item) => (
              <StylElementSelectVisitDoctor
                key={item.value}
                id={item.value}
                onClick={(e) => {
                  chooseOccupationDoctor(e);
                  setFocusInput(false);
                }}
              >
                {item.label}
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
            id='doctorsName'
            role = 'doctorsName'
            data-testid='doctorsName'
            value={isValueInputName}
            onFocus={() => setFocusInputName(true)}
            onChange={(e) => setValueInputName(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                if (!isNameDoctorsArr.includes(isValueInputName)) {
                  setValueInputName('');
                }

                setFocusInputName(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInputName}>
            {isNameDoctorsArr.map((item) => (
              <StylElementSelectVisitDoctor
                onClick={(e) => {
                  chooseNameDoctor(e);
                  setFocusInputName(false);
                }}
                key={item.value}
              >
                {item.label}
              </StylElementSelectVisitDoctor>
            ))}
          </StylBoxMenuSelectVisitDoctor>
        </StylBoxColumnFlex>
      </StylBoxColumnFlexMargin>
      <StylBoxColumnFlexMargin dataReady={true}>
        <StylTitleVisitDoctor>Note</StylTitleVisitDoctor>
        <StylBoxColumnFlex>
          <StylInputVisitDoctor
            id='userNote'
            role='userNote'
            data-testid='userNote'
            placeholder='Leave a note if needed'
            onChange={(e) => setNoteUser(e.currentTarget.value)}
          />
        </StylBoxColumnFlex>
      </StylBoxColumnFlexMargin>
    </StylItemChooseDoctor>
  );
};

export default InputsAppointment;
