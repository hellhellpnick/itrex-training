export interface AuthReducerType {
  user?: {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
  };
  token?: string;
  error?: string;
  isAuthenticated: boolean;
}

export interface IAddAppointmentResponse {
  id: string;
  patient_id: string;
  doctor_id: string;
  visit_date: string;
  reason: string;
  note: string;
  status: string;
}

export interface IAddAppointment {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
}

export interface IAddAppointmentResponse {
  id: string;
  patient_id: string;
  doctor_id: string;
  visit_date: string;
  reason: string;
  note: string;
  status: string;
}

export interface ILogInForm {
  userName: string;
  password: string;
}

export interface IRegisterForm {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ITokens {
  access_token: string;
  refresh_token: string;
}

export interface IProfileWithData {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
  };
}

export interface IProfile {
  id: string;
  first_name: string;
  last_name: string;
  photo: string;
  role_name: string;
}
