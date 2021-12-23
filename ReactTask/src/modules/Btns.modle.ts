export interface IBtnCreateAppointment {
  cliclChangeBox?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IBtnPatients {
  text: string;
  path: string;
}

export interface IBtnSubmitForm {
  text: string;
  role?: string;
  disabled?: boolean;
}
