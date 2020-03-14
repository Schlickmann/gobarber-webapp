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
  const { schedule, scheduleRequest, timesheet, timesheetRequest } = useContext(
    scheduleContext
  );

  useEffect(() => {
    timesheetRequest();
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
        <Time past>
          <strong>08:00</strong>
          <span>Juliani Schlickmann Damasceno</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Time available</span>
        </Time>
        <Time>
          <strong>09:00</strong>
          <span>Emerson Mellado</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Maria Fernandes</span>
        </Time>
      </ul>
    </Container>
  );
}
