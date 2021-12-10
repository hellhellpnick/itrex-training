export interface ICreateAppointment {
  switchContent: () => void;
}

export interface IInputAppointment {
  setFilledData: (data: boolean) => void;
  setDoctorChoose: (data: string) => void;
  setNoteUser: (data: string) => void;
}

export interface IDoctorsBySpecializations {
  item: { id: string; first_name: string; last_name: string };
}

export interface INameDoctor {
  id: string;
  first_name: string;
  last_name: string;
}

export interface IOccupationDoctor {
  id: string;
  specialization_name: string;
}

export interface IOccupationDoctorArr extends Array<IOccupationDoctor> {}
export interface INameDoctorArr extends Array<INameDoctor> {}
