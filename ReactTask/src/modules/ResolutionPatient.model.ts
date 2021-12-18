export interface IResolutionPatient {
  showContent: boolean;
  namePesron: string;
  textAreaMessage: string;
  statusForm: boolean;
  changeShowResolution: () => void;
}

export interface IResolution {
  resolution: string;
  appointmentID: string;
}

export interface IResolutionResponse {
  id: string;
  appointment_id: string;
  next_appointment_date: string;
  resolution: string;
}
