import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import { storeUser } from './actions';

const initialState = {
  loading: false,
};

const Types = {
  HANDLE_SIGN_UP_REQUEST: '@authContext/HANDLE_SIGN_UP_REQUEST',
  HANDLE_SIGN_UP_SUCCESS: '@authContext/HANDLE_SIGN_UP_SUCCESS',
  HANDLE_SIGN_UP_FAILURE: '@authContext/HANDLE_SIGN_UP_FAILURE',
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_SIGN_UP_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_SIGN_UP_SUCCESS: {
        draft.loading = false;

        break;
      }
      case Types.HANDLE_SIGN_UP_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

const userContext = createContext(initialState);
const { Provider } = userContext;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

export { Types, userContext, UserProvider };
