const regulPassword = /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/,
  regulEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const nameDoctorsArr = ['John Milton', 'Joe Charles', 'Jonathan Meyers'];
const ocuppationDoctorArr = ['Therapist', 'Surgeon'];
const possibleTimeArr = [
  '12:00 am',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00 pm',
  '5:00 pm',
  '6:00 pm',
  '7:00 pm',
  '8:00 pm',
  '9:00 pm',
];

export {
  regulEmail,
  regulPassword,
  daysInMonths,
  daysLeap,
  daysOfTheWeek,
  months,
  nameDoctorsArr,
  ocuppationDoctorArr,
  possibleTimeArr,
};
