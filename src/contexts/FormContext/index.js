import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { reducer, INITIAL_STATE, Types } from './reducer';

const formContext = createContext(INITIAL_STATE);
const { Provider } = formContext;

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    setEmail: email => {
      dispatch({ type: Types.HANDLE_EMAIL_CHANGE, email });
    },
    setPassword: password => {
      dispatch({ type: Types.HANDLE_PASSWORD_CHANGE, password });
    },
    setShowPassword: isVisible => {
      dispatch({
        type: Types.HANDLE_PASSWORD_EXHIBITION,
        fieldType: isVisible ? 'text' : 'password',
      });
    },
    setName: name => {
      dispatch({ type: Types.HANDLE_NAME_CHANGE, name });
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

FormProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { formContext, FormProvider };
