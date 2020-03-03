import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  email: '',
  password: '',
  name: '',
};

const actions = {
  HANDLE_EMAIL_CHANGE: '@formContext/HANDLE_EMAIL_CHANGE',
  HANDLE_PASSWORD_CHANGE: '@formContext/HANDLE_PASSWORD_CHANGE',
  HANDLE_NAME_CHANGE: '@formContext/HANDLE_NAME_CHANGE',
};

function reducer(state, action) {
  switch (action.type) {
    case actions.HANDLE_EMAIL_CHANGE:
      return { ...state, email: action.email };
    case actions.HANDLE_PASSWORD_CHANGE:
      return { ...state, password: action.password };
    case actions.HANDLE_NAME_CHANGE:
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const formContext = createContext(initialState);
const { Provider } = formContext;

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    email: state.email,
    password: state.password,
    name: state.name,
    setEmail: email => {
      dispatch({ type: actions.HANDLE_EMAIL_CHANGE, email });
    },
    setPassword: password => {
      dispatch({ type: actions.HANDLE_PASSWORD_CHANGE, password });
    },
    setName: name => {
      dispatch({ type: actions.HANDLE_NAME_CHANGE, name });
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

FormProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { formContext, FormProvider };
