import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { reducer, INITIAL_STATE, Types } from './reducer';

const formContext = createContext(INITIAL_STATE);
const { Provider } = formContext;

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    setField: (cField, content) => {
      dispatch({
        type: Types.HANDLE_FIELD_CHANGE,
        payload: { cField, content },
      });
    },
    setShowPassword: (cField, isVisible) => {
      dispatch({
        type: Types.HANDLE_PASSWORD_EXHIBITION,
        payload: {
          cField,
          fieldType: isVisible ? 'text' : 'password',
        },
      });
    },
    setAvatarUrl: content => {
      dispatch({
        type: Types.HANDLE_AVATAR_URL_UPDATE,
        payload: { url: content },
      });
    },
  };

  return <Provider value={value}>{children}</Provider>;
};

FormProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { formContext, FormProvider };
