import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { getSchedule, getTimesheet } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

const scheduleContext = createContext(INITIAL_STATE);
const { Provider } = scheduleContext;

const ScheduleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    timesheetRequest: () => {
      dispatch({
        type: Types.HANDLE_TIMESHEET_REQUEST,
      });

      getTimesheet(dispatch);
    },
    scheduleRequest: data => {
      dispatch({
        type: Types.HANDLE_SCHEDULE_REQUEST,
      });

      getSchedule(data, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

ScheduleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { scheduleContext, ScheduleProvider };
