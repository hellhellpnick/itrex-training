import React, { useState } from 'react';

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

import { nameDoctorsArr, ocuppationDoctorArr } from './../../constants/index';

const InputsAppointment = ({ setFilledData }) => {
  const [isFocusInput, setFocusInput] = useState(false),
    [isFocusInputName, setFocusInputName] = useState(false),
    [isValueInputOccupation, setValueInputOccupation] = useState(''),
    [isValueInputName, setValueInputName] = useState('');

  isValueInputName && isValueInputOccupation
    ? setFilledData(true)
    : setFilledData(false);

  const chooseOccupationDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;

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
            value={isValueInputOccupation}
            onFocus={() => setFocusInput(true)}
            onChange={(e) => setValueInputOccupation(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                if (!ocuppationDoctorArr.includes(isValueInputOccupation)) {
                  setValueInputOccupation('');
                }

                setFocusInput(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInput}>
            {ocuppationDoctorArr.map((item, index) => (
              <StylElementSelectVisitDoctor
                key={index}
                onClick={(e) => {
                  chooseOccupationDoctor(e);
                  setFocusInput(false);
                }}
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
            onFocus={() => setFocusInputName(true)}
            onChange={(e) => setValueInputName(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                if (!ocuppationDoctorArr.includes(isValueInputName)) {
                  setValueInputName('');
                }

                setFocusInputName(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInputName}>
            {nameDoctorsArr.map((item, index) => (
              <StylElementSelectVisitDoctor
                onClick={(e) => {
                  chooseNameDoctor(e);
                  setFocusInputName(false);
                }}
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
  );
};

export default InputsAppointment;
