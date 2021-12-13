export interface ICardPatientProfile {
  imgIconDescription: string;
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
