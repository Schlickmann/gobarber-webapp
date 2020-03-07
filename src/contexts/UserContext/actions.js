import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { Types } from './reducer';

const storeUser = async (name, email, password, dispatch) => {
  try {
    const response = await api.post('/users', {
      name,
      email,
      password,
      provider: true,
    });

    if (response.status === 200) {
      toast.success('User added successfully');

      dispatch({
        type: Types.HANDLE_SIGN_IN_SUCCESS,
        payload: {},
      });

      history.push('/');
    }
  } catch (error) {
    toast.error(error.response.data.error);

    dispatch({
      type: Types.HANDLE_SIGN_UP_FAILURE,
    });
  }
};

export { storeUser };
