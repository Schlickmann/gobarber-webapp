import produce from 'immer';

const Types = {
  HANDLE_SCHEDULE_REQUEST: '@scheduleContext/HANDLE_SCHEDULE_REQUEST',
  HANDLE_SCHEDULE_SUCCESS: '@scheduleContext/HANDLE_SCHEDULE_SUCCESS',
  HANDLE_SCHEDULE_FAILURE: '@scheduleContext/HANDLE_SCHEDULE_FAILURE',
  HANDLE_TIMESHEET_REQUEST: '@timesheetContext/HANDLE_TIMESHEET_REQUEST',
  HANDLE_TIMESHEET_SUCCESS: '@timesheetContext/HANDLE_TIMESHEET_SUCCESS',
  HANDLE_TIMESHEET_FAILURE: '@timesheetContext/HANDLE_TIMESHEET_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  schedule: [],
  timesheet: [],
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_SCHEDULE_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_SCHEDULE_SUCCESS: {
        draft.schedule = action.payload.schedule;
        break;
      }
      case Types.HANDLE_SCHEDULE_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.HANDLE_TIMESHEET_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_TIMESHEET_SUCCESS: {
        draft.timesheet = action.payload.timesheet;
        break;
      }
      case Types.HANDLE_TIMESHEET_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export { reducer, INITIAL_STATE, Types };
