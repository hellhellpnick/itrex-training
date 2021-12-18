export interface ICardProfile {
  imgIconDescription: string;
}

export interface ICardPatientProfile extends ICardProfile {
  item: {
    id: string;
    status: string;
    visit_date: string;
    reason: string;
    note: string;
    patient: {
      photo: string;
      last_name: string;
      first_name: string;
    };
  };
}

export interface ICardDoctorProfile extends ICardProfile {
  item: {
    id: string;
    status: string;
    visit_date: string;
    reason: string;
    note: string;
    doctor: {
      photo: string;
      last_name: string;
      first_name: string;
    };
  };
}

export interface IPatient {
  id: string;
  status: string;
  visit_date: string;
  reason: string;
  note: string;
  patient: {
    photo: string;
    last_name: string;
    first_name: string;
  };
}

export interface IPatientResolutions {
  id: string;
  appointment_id: string;
  next_appointment_date: string;
  resolution: string;
  visit_date: string;
  doctor: {
    last_name: string;
    first_name: string;
    id: string;
    photo: string;
    specialization_nam: string;
  };
}
