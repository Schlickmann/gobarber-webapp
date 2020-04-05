import React, { useEffect, useContext /* useState */ } from 'react';
import { FaRegCalendarPlus, FaRegTrashAlt } from 'react-icons/fa';

import { scheduleContext } from '~/contexts/ScheduleContext';

// import Modal from '~/components/Modal';
// import AvailableHours from '~/components/AvailableHours';
import { Container, Time } from './styles';

export default function Timesheet() {
  const {
    timesheetRequest,
    deleteHourRequest,
    addHourRequest,
    timesheet,
  } = useContext(scheduleContext);

  // const [show, setShow] = useState(false);

  useEffect(() => {
    function loadTimesheet() {
      timesheetRequest();
    }

    loadTimesheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function toggle() {
  //   setShow(!show);
  // }

  function handleDeletion(id) {
    deleteHourRequest(id);
  }

  function handleAddition(id) {
    addHourRequest(id);
  }

  return (
    <Container>
      <header>
        <strong>Schedule</strong>
        <FaRegCalendarPlus size={36} color="#f0f0f0" />
      </header>

      <ul>
        {timesheet.map(time => {
          return (
            <Time key={time.id} used={time.used}>
              <strong>{time.time}</strong>
              {time.used ? (
                <button type="button" onClick={() => handleDeletion(time.id)}>
                  <FaRegTrashAlt color="#f0f0f0" size={14} />
                </button>
              ) : (
                <button type="button" onClick={() => handleAddition(time.id)}>
                  <FaRegCalendarPlus color="#fe346e" size={14} />
                </button>
              )}
            </Time>
          );
        })}
      </ul>
      {/* <Modal
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
      /> */}
    </Container>
  );
}
