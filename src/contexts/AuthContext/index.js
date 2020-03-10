import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { signIn, logOut } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

import usePersistedState from '~/utils/UsePersistedState';
import setHeader from '~/utils/functions/setHeader';

const authContext = createContext(INITIAL_STATE);
const { Provider } = authContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [auth, setAuth] = usePersistedState('@gobarber/authContext', {});
  const context = useMemo(() => {
    if (auth.signed) {
      setHeader('Authorization', `Bearer ${auth.token}`);
    }
    return { auth, setAuth };
  }, [auth, setAuth]);

  const {
    auth: { token, user, signed, loading },
  } = context;
  const value = {
    token: token || state.token,
    user: user || state.user,
    signed: signed || state.signed,
    loading: loading || state.loading,
    signInRequest: (email, password) => {
      dispatch({
        type: Types.HANDLE_SIGN_IN_REQUEST,
      });

      signIn(email, password, context.setAuth, dispatch);
    },
    logOutRequest: () => {
      dispatch({
        type: Types.HANDLE_LOG_OUT_REQUEST,
      });

      logOut(context.setAuth, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { authContext, AuthProvider };
