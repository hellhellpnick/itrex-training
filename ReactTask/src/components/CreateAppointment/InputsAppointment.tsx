import  {
  useEffect,
  useState,
  MouseEvent,
  FormEvent,
  FunctionComponent,
  ChangeEvent,
} from 'react';

import {
  StylBoxColumnFlex,
  StylItemChooseDoctor,
  StylTitleVisitDoctor,
  StylInputVisitDoctor,
  StylArrowVisitDoctor,
  StylBoxMenuSelectVisitDoctor,
  StylElementSelectVisitDoctor,
  StylBoxColumnFlexMargin,
} from '..';
import {
  getAllSpecializations,
  getDoctorsBySpecializations,
} from './../../redux/patient/patientOperations';

import {
  IInputAppointment,
  IOccupationDoctorArr,
  INameDoctorArr,
} from '../../modules/CreateAppointment.model';

const InputsAppointment: FunctionComponent<IInputAppointment> = ({
  setFilledData,
  setDoctorChoose,
  setNoteUser,
}) => {
  const [isOcuppationDoctorArr, setOcuppationDoctorArr] =
    useState<IOccupationDoctorArr>([]);
  const [isNameDoctorsArr, setNameDoctorsArr] = useState<INameDoctorArr>([]);
  const [isFocusInput, setFocusInput] = useState(false),
    [isFocusInputName, setFocusInputName] = useState(false),
    [isValueInputOccupation, setValueInputOccupation] = useState<String>(''),
    [isValueInputName, setValueInputName] = useState<String>('');

  useEffect(() => {
    getAllSpecializations().then((response) => {
      setOcuppationDoctorArr(response.data);
    });

    isValueInputName && isValueInputOccupation
      ? setFilledData(true)
      : setFilledData(false);
  }, [isValueInputName, isValueInputOccupation, setFilledData]);

  const chooseOccupationDoctor = (e: MouseEvent) => {
    const selectData = e.currentTarget.innerHTML;
    const idSelect = e.currentTarget.id;

    setDoctorChoose(idSelect);
    getDoctorsBySpecializations(idSelect).then((response) => {
      setNameDoctorsArr(response.data);
    });

    setValueInputOccupation(selectData);
    setFocusInput(false);
  };

  const chooseNameDoctor = (e: MouseEvent) => {
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
            value={isValueInputOccupation as string}
            onFocus={() => setFocusInput(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValueInputOccupation(e.currentTarget!.value)
            }
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                if (
                  !isOcuppationDoctorArr.includes(
                    isValueInputOccupation as any
                  )
                ) {
                  setValueInputOccupation('');
                }

                setFocusInput(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInput}>
            {isOcuppationDoctorArr.length !== 0 &&
              isOcuppationDoctorArr.map((item, index) => {
                return (
                  <StylElementSelectVisitDoctor
                    key={index}
                    id={item.id}
                    onClick={(e: MouseEvent) => {
                      chooseOccupationDoctor(e);
                      setFocusInput(false);
                    }}
                  >
                    {item.specialization_name}
                  </StylElementSelectVisitDoctor>
                );
              })}
          </StylBoxMenuSelectVisitDoctor>
        </StylBoxColumnFlex>
      </StylBoxColumnFlexMargin>
      <StylBoxColumnFlexMargin dataReady={true}>
        <StylTitleVisitDoctor>Doctor’s Name</StylTitleVisitDoctor>
        <StylBoxColumnFlex>
          <StylArrowVisitDoctor focusSelect={isFocusInputName} />
          <StylInputVisitDoctor
            id='doctorsName'
            role='doctorsName'
            data-testid='doctorsName'
            value={isValueInputName as string}
            onFocus={() => setFocusInputName(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValueInputName(e.currentTarget!.value)
            }
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (!isNameDoctorsArr.includes(isValueInputName as any)) {
                  setValueInputName('');
                }

                setFocusInputName(false);
              }
            }}
          />
          <StylBoxMenuSelectVisitDoctor focusSelect={isFocusInputName}>
            {isNameDoctorsArr.length !== 0 &&
              isNameDoctorsArr.map((item, index) => {
                return (
                  <StylElementSelectVisitDoctor
                    onClick={(e: MouseEvent) => {
                      chooseNameDoctor(e);
                      setFocusInputName(false);
                    }}
                    key={index}
                    id={item.id}
                  >
                    {item.first_name} {item.last_name}
                  </StylElementSelectVisitDoctor>
                );
              })}
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
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setNoteUser(e.currentTarget.value)
            }
          />
        </StylBoxColumnFlex>
      </StylBoxColumnFlexMargin>
    </StylItemChooseDoctor>
  );
};

export default InputsAppointment;
