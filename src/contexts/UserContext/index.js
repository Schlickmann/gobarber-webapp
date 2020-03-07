import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { storeUser } from './actions';
import { reducer, INITIAL_STATE } from './reducer';

const userContext = createContext(INITIAL_STATE);
const { Provider } = userContext;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    storeUserRequest: (name, email, password) => {
      storeUser(name, email, password, dispatch);
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { userContext, UserProvider };
