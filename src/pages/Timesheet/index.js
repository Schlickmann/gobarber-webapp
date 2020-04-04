import React, { useEffect, useContext, useState } from 'react';
import { FaRegCalendarPlus } from 'react-icons/fa';

import { scheduleContext } from '~/contexts/ScheduleContext';

import Modal from '~/components/Modal';
import AvailableHours from '~/components/AvailableHours';
import { Container, Time } from './styles';

export default function Timesheet() {
  const { timesheetRequest, timesheet } = useContext(scheduleContext);

  const [show, setShow] = useState(false);

  useEffect(() => {
    function loadTimesheet() {
      timesheetRequest();
    }

    loadTimesheet();
  }, []);

  function toggle() {
    setShow(!show);
  }

  return (
    <Container>
      <header>
        <strong>Schedule</strong>
        <button type="button" onClick={toggle}>
          <FaRegCalendarPlus size={36} color="#f0f0f0" />
        </button>
      </header>

      <ul>
        {timesheet.map(time => {
          if (time.used) {
            return (
              <Time key={time.id}>
                <strong>{time.time}</strong>
              </Time>
            );
          }

          return null;
        })}
      </ul>
      <Modal
        show={show}
        title="Add hour to schedule"
        content={() => <AvailableHours />}
        buttons={[
          <button type="button" onClick={toggle} className="secondary">
            Close
          </button>,
          <button type="button" className="primary">
            Save
          </button>,
        ]}
      />
    </Container>
  );
}
