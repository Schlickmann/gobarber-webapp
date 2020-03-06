import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import api from '~/services/api';
import history from '~/services/history';

const initialState = {
  token: null,
  signed: false,
  loading: false,
  user: null,
};

const Types = {
  HANDLE_SIGN_IN_SUCCESS: '@authContext/HANDLE_SIGN_IN_SUCCESS',
  HANDLE_SIGN_IN_FAILURE: '@authContext/HANDLE_SIGN_IN_FAILURE',
};

function reducer(state, action) {
  switch (action.type) {
    case Types.HANDLE_SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
      });
    default:
      return state;
  }
}

const authContext = createContext(initialState);
const { Provider } = authContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    signInRequest: async (email, password) => {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      if (!user.provider) {
        console.tron.error('User is not a provider');
        dispatch({
          type: Types.HANDLE_SIGN_IN_FAILURE,
        });
      }

      dispatch({
        type: Types.HANDLE_SIGN_IN_SUCCESS,
        payload: { token, user },
      });

      history.push('/dashboard');
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { authContext, AuthProvider };
