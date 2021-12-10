import React, { FunctionComponent, useState, useEffect } from 'react';

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
} from '../../constants/index';

import arrowImg from './../../img/icons/icon-arrow-right.svg';
import { ICalendarVisitDoctor } from '../../modules/CalendarVisitDoctor.modules';

const CalendarVisitDoctor: FunctionComponent<ICalendarVisitDoctor> = ({
  changeData,
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    changeData(date.toISOString());
  }, [date, changeData]);

  function getStartDayOfMonth(date: Date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  const isLeapYear = (year: any) => {
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

            return (
              <StylDayVisitDoctor
                key={index}
                id={date.toISOString()}
                data-testid={new Date(year, month, daySelect).toISOString()}
                role={new Date(year, month, daySelect).toISOString()}
                isToday={daySelect === date.getDate()}
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
