import { toast } from 'react-toastify';

import api from '~/services/api';
import { Types } from './reducer';

const getSchedule = async (data, dispatch) => {
  try {
    const response = await api.get(`/providers/${data.userId}/available`, {
      date: data.date,
    });

    dispatch({
      type: Types.HANDLE_SCHEDULE_SUCCESS,
      payload: { schedule: response.data },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_SCHEDULE_FAILURE,
    });
  }
};

const getTimesheet = async dispatch => {
  try {
    const response = await api.get(`/timesheet`);

    dispatch({
      type: Types.HANDLE_TIMESHEET_SUCCESS,
      payload: { timesheet: response.data },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_TIMESHEET_FAILURE,
    });
  }
};

export { getSchedule, getTimesheet };
