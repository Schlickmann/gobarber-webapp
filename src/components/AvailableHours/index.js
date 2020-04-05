import React, { useContext } from 'react';

import { scheduleContext } from '~/contexts/ScheduleContext';

import { Container, Time } from './styles';

export default function AvailableHours() {
  const { timesheet } = useContext(scheduleContext);

  return (
    <Container>
      {timesheet.map(time => {
        return (
          <Time key={time.id} used={time.used}>
            <input type="checkbox" id={time.id} />
            <label htmlFor={time.id}>{time.time}</label>
          </Time>
        );
      })}
    </Container>
  );
}
