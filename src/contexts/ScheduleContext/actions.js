import { toast } from 'react-toastify';
import { parseISO, isEqual } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';
import { Types } from './reducer';

const getAvailableTime = async data => {
  try {
    const response = await api.get(`/providers/${data.userId}/available`, {
      params: { date: data.date },
    });

    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);

    return [];
  }
};

const getSchedule = async (data, dispatch) => {
  try {
    // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const response = await api.get(`/schedule`, {
      params: { date: data.date.getTime() },
    });

    const timesheet = await getAvailableTime({
      ...data,
      date: data.date.getTime(),
    });

    const schedule = timesheet.map(t => {
      return {
        time: t.time,
        past: t.past,
        available: t.available,
        appointment: response.data.find(a => {
          return isEqual(parseISO(a.date), parseISO(t.value));
        }),
      };
    });

    dispatch({
      type: Types.HANDLE_SCHEDULE_SUCCESS,
      payload: { schedule },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_SCHEDULE_FAILURE,
    });
  }
};

const getAvailableHours = async () => {
  try {
    const response = await api.get('/timesheet');
    console.tron.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    return [];
  }
};

const getTimesheet = async dispatch => {
  try {
    const schedule = await getAvailableHours();

    const response = await api.get(`/provider/timesheet`);

    const timesheet = schedule.map(hour => {
      return {
        ...hour,
        used: !!response.data.find(a => a.time === hour.time),
      };
    });

    dispatch({
      type: Types.HANDLE_TIMESHEET_SUCCESS,
      payload: { timesheet },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_TIMESHEET_FAILURE,
    });
  }
};

const deleteHour = async (id, dispatch) => {
  try {
    await api.delete(`/provider/timesheet/${id}`);

    dispatch({
      type: Types.HANDLE_DELETE_HOUR_SUCCESS,
      payload: { id },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_DELETE_HOUR_FAILURE,
    });
  }
};

const addHour = async (id, dispatch) => {
  try {
    await api.post(`/provider/timesheet`, { time_id: id });

    dispatch({
      type: Types.HANDLE_ADD_HOUR_SUCCESS,
      payload: { id },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: Types.HANDLE_ADD_HOUR_FAILURE,
    });
  }
};

export { getSchedule, getTimesheet, getAvailableHours, deleteHour, addHour };
