import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  cFieldEmail: {
    value: '',
    type: 'email',
  },
  cFieldPassword: {
    value: '',
    type: 'password',
  },
  cFieldName: {
    value: '',
    type: 'text',
  },
};

const actions = {
  HANDLE_EMAIL_CHANGE: '@formContext/HANDLE_EMAIL_CHANGE',
  HANDLE_PASSWORD_CHANGE: '@formContext/HANDLE_PASSWORD_CHANGE',
  HANDLE_PASSWORD_EXHIBITION: '@formContext/HANDLE_PASSWORD_EXHIBITION',
  HANDLE_NAME_CHANGE: '@formContext/HANDLE_NAME_CHANGE',
};

function reducer(state, action) {
  switch (action.type) {
    case actions.HANDLE_EMAIL_CHANGE:
      return { ...state, email: { ...state.email, value: action.email } };
    case actions.HANDLE_PASSWORD_CHANGE:
      return {
        ...state,
        password: { ...state.password, value: action.password },
      };
    case actions.HANDLE_PASSWORD_EXHIBITION:
      return {
        ...state,
        password: { ...state.password, type: action.fieldType },
      };
    case actions.HANDLE_NAME_CHANGE:
      return { ...state, name: { ...state.name, value: action.name } };
    default:
      return state;
  }
}

const formContext = createContext(initialState);
const { Provider } = formContext;

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cFieldEmail: state.cFieldEmail,
    cFieldPassword: state.cFieldPassword,
    cFieldName: state.cFieldName,
    setEmail: email => {
      dispatch({ type: actions.HANDLE_EMAIL_CHANGE, email });
    },
    setPassword: password => {
      dispatch({ type: actions.HANDLE_PASSWORD_CHANGE, password });
    },
    setShowPassword: isVisible => {
      dispatch({
        type: actions.HANDLE_PASSWORD_EXHIBITION,
        fieldType: isVisible ? 'text' : 'password',
      });
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
