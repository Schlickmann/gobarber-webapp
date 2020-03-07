import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import { signIn } from './actions';

import usePersistedState from '~/utils/UsePersistedState';
import setHeader from '~/utils/functions/setHeader';

const initialState = {
  token: null,
  signed: false,
  loading: false,
  user: null,
};

const Types = {
  HANDLE_SIGN_IN_REQUEST: '@authContext/HANDLE_SIGN_IN_REQUEST',
  HANDLE_SIGN_IN_SUCCESS: '@authContext/HANDLE_SIGN_IN_SUCCESS',
  HANDLE_SIGN_IN_FAILURE: '@authContext/HANDLE_SIGN_IN_FAILURE',
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;

        action.payload.setAuth({
          signed: true,
          token: action.payload.token,
          user: action.payload.user,
        });
        break;
      }
      case Types.HANDLE_SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

const authContext = createContext(initialState);
const { Provider } = authContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [auth, setAuth] = usePersistedState('@gobarber/authContext', null);
  const context = useMemo(() => {
    if (auth) {
      setHeader('Authorization', `Bearer ${auth.token}`);
    }
    return { auth, setAuth };
  }, [auth, setAuth]);

  const { auth: authObj } = context;
  const value = {
    ...authObj,
    loading: state.loading,
    signInRequest: (email, password) => {
      signIn(email, password, context.setAuth, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { Types, authContext, AuthProvider };
