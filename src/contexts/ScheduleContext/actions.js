import { toast } from 'react-toastify';
import { parseISO, isEqual } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';
import { Types } from './reducer';

const getTimesheet = async data => {
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

    const timesheet = await getTimesheet({
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

export { getSchedule };
