export interface IBtnCreateAppointment {
  cliclChangeBox?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IBtnPatients {
  text: string;
  active: boolean;
}

export interface IBtnPatientsHiddenMob {
  text: string;
  active: boolean;
}

export interface IBtnSubmitForm {
  text: string;
  role?: string;
  disabled?: boolean;
}
