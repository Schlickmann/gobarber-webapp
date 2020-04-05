/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, subDays, addDays } from 'date-fns';

import { MdChevronLeft, MdChevronRight, MdEvent } from 'react-icons/md';

import { scheduleContext } from '~/contexts/ScheduleContext';
import { userContext } from '~/contexts/UserContext';
import { Container, Time, InitialMessage } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(() => format(date, 'MMMM do'), [date]);

  const { user } = useContext(userContext);
  const { schedule, scheduleRequest } = useContext(scheduleContext);

  useEffect(() => {
    function loadDashboard() {
      scheduleRequest({ userId: user.id, date });
    }
    if (user) {
      loadDashboard();
    }
  }, [user, date]);

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

      {schedule.length > 0 ? (
        <ul>
          {schedule.map(time => (
            <Time key={time.time} past={time.past} available={time.available}>
              <strong>{time.time}</strong>
              <span>
                {time.appointment
                  ? time.appointment.user.name
                  : 'Time available'}
              </span>
            </Time>
          ))}
        </ul>
      ) : (
        <InitialMessage>
          <strong>You have not set up your schedule yet!</strong>
          <Link to="/timesheet">
            <MdEvent size={20} color="#f0f0f0" /> Set Up Schedule
          </Link>
        </InitialMessage>
      )}
    </Container>
  );
}
