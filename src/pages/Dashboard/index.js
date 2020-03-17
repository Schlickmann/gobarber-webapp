/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useContext, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { scheduleContext } from '~/contexts/ScheduleContext';
import { userContext } from '~/contexts/UserContext';
import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(() => format(date, 'MMMM do'), [date]);

  const { user } = useContext(userContext);
  const { schedule, scheduleRequest } = useContext(scheduleContext);

  useEffect(() => {
    function loadDashboard() {
      scheduleRequest({ userId: user.id, date });
    }
    loadDashboard();
  }, []);

  function handlePreviousDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviousDay}>
          <MdChevronLeft size={36} color="#fe346e" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fe346e" />
        </button>
      </header>

      <ul>
        {schedule.map(s => (
          <Time key={s.time} past={s.past} available={s.available}>
            <strong>{s.time}</strong>
            <span>
              {s.appointment ? s.appointment.user.name : 'Time available'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
