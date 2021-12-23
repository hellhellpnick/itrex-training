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

const MessageSuccess = {
  show: true,
  err: false,
  message: 'Everything went well',
};

const MessageError = {
  show: true,
  err: true,
  message: 'Something went wrong',
};

export {
  daysInMonths,
  daysLeap,
  daysOfTheWeek,
  months,
  MessageSuccess,
  MessageError,
};
