const regulPassword = /(?=.*[A-Z]+)(?=.*[0-9])(?=.*[a-z]){6,}/,
  regulEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//calendar
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

export {
  regulEmail,
  regulPassword,
  daysInMonths,
  daysLeap,
  daysOfTheWeek,
  months,
};
