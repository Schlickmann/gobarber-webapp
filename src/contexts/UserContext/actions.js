import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { Types } from './reducer';

const signUp = async (name, email, password, dispatch) => {
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
        type: Types.HANDLE_SIGN_UP_SUCCESS,
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

const uploadAvatar = async (file, authContext, dispatch) => {
  try {
    const data = new FormData();

    data.append('file', file);

    const response = await api.post('/files', data);

    toast.success('Avatar uploaded successfully');

    dispatch({
      type: Types.HANDLE_AVATAR_UPDATE_SUCCESS,
      payload: { file: response.data /* authContext */ },
    });
  } catch (error) {
    toast.error(error.response.data.error);

    dispatch({
      type: Types.HANDLE_AVATAR_UPDATE_FAILURE,
    });
  }
};

const updateUser = async (data, authContext, dispatch) => {
  try {
    const { name, email, avatar_id, ...rest } = data;

    const user = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword.trim() ? rest : {}),
    };

    const response = await api.put('/users', user);

    toast.success('Profile updated successfully');
    dispatch({
      type: Types.HANDLE_UPDATE_SUCCESS,
      payload: { user: response.data /* authContext */ },
    });
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({ type: Types.HANDLE_UPDATE_FAILURE });
  }
};

export { signUp, updateUser, uploadAvatar };
