import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { signUp } from './actions';
import { reducer, INITIAL_STATE, Types } from './reducer';

const userContext = createContext(INITIAL_STATE);
const { Provider } = userContext;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    storeUserRequest: (name, email, password) => {
      dispatch({ type: Types.HANDLE_SIGN_UP_REQUEST });
      signUp(name, email, password, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { userContext, UserProvider };
