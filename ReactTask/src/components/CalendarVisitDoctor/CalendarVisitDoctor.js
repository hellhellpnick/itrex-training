import * as React from 'react';
import { useState, useEffect } from 'react';

import {
  StylBtnVisitDoctor,
  StylDayVisitDoctor,
  StylDayWeekVisitDoctor,
  StylBoxCalendar,
  StylHeaderCalendarVisitDoctor,
  StylBodyCalendarVisitDoctor,
} from './index';
import {
  daysInMonths,
  daysLeap,
  daysOfTheWeek,
  months,
} from './../../constants/index';

import arrowImg from './../../img/icons/icon-arrow-right.svg';

const CalendarVisitDoctor = ({ changeData }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const days = isLeapYear(year) ? daysLeap : daysInMonths;

  return (
    <StylBoxCalendar>
      <StylHeaderCalendarVisitDoctor>
        <StylBtnVisitDoctor
          onClick={() => setDate(new Date(year, month - 1, day))}
          imgUrl={arrowImg}
        />
        <div>
          {months[month]} {year}
        </div>
        <StylBtnVisitDoctor
          onClick={() => setDate(new Date(year, month + 1, day))}
          imgUrl={arrowImg}
        />
      </StylHeaderCalendarVisitDoctor>
      <StylBodyCalendarVisitDoctor>
        {daysOfTheWeek.map((item, index) => (
          <StylDayWeekVisitDoctor key={index}>{item}</StylDayWeekVisitDoctor>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const daySelect = index - (startDay - 2);
            changeData(daySelect);

            return (
              <StylDayVisitDoctor
                key={index}
                isToday={daySelect === today.getDate()}
                isSelected={daySelect === day}
                onClick={() => setDate(new Date(year, month, daySelect))}
              >
                {daySelect > 0 && daySelect}
              </StylDayVisitDoctor>
            );
          })}
      </StylBodyCalendarVisitDoctor>
    </StylBoxCalendar>
  );
};

export default CalendarVisitDoctor;