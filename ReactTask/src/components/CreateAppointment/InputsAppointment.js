import React, { useState, useEffect } from 'react';
import { getAllSpecializations } from '../../redux/patient/patientOperations';

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

import { getDoctorsBySpecializations } from '../../redux/patient/patientOperations';

const InputsAppointment = ({ setFilledData, setDoctorChoose }) => {
  const [isOcuppationDoctorArr, setOcuppationDoctorArr] = useState([]);
  const [isNameDoctorsArr, setNameDoctorsArr] = useState([]);
  const [isFocusInput, setFocusInput] = useState(false),
    [isFocusInputName, setFocusInputName] = useState(false),
    [isValueInputOccupation, setValueInputOccupation] = useState(''),
    [isValueInputName, setValueInputName] = useState('');

  useEffect(() => {
    getAllSpecializations().then((response) =>
      setOcuppationDoctorArr(
        response.data.map((item) => ({
          value: item.id,
          label: item.specialization_name,
        }))
      )
    );
  }, []);

  isValueInputName && isValueInputOccupation
    ? setFilledData(true)
    : setFilledData(false);

  const chooseOccupationDoctor = (e) => {
    const selectData = e.currentTarget.innerHTML;
    const idSelect = e.currentTarget.id;
    setDoctorChoose(idSelect);
    getDoctorsBySpecializations(idSelect).then((response) => {
      setNameDoctorsArr(
        response.data.map((item) => ({
          value: item.id,
          label: `${item.first_name} ${item.last_name}`,
        }))
      );
    });

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
          <StylInputVisitDoctor placeholder='Leave a note if needed' />
        </StylBoxColumnFlex>
      </StylBoxColumnFlexMargin>
    </StylItemChooseDoctor>
  );
};

export default InputsAppointment;
