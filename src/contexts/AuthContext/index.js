import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { signIn } from './actions';
import { reducer, INITIAL_STATE } from './reducer';

import usePersistedState from '~/utils/UsePersistedState';
import setHeader from '~/utils/functions/setHeader';

const authContext = createContext(INITIAL_STATE);
const { Provider } = authContext;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
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

export { authContext, AuthProvider };
