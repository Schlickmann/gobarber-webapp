const INITIAL_STATE = {
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
  cFieldOldPassword: {
    value: '',
    type: 'password',
  },
  cFieldConfirmPassword: {
    value: '',
    type: 'password',
  },
};

const Types = {
  HANDLE_NAME_CHANGE: '@formContext/HANDLE_NAME_CHANGE',
  HANDLE_EMAIL_CHANGE: '@formContext/HANDLE_EMAIL_CHANGE',
  HANDLE_PASSWORD_CHANGE: '@formContext/HANDLE_PASSWORD_CHANGE',
  HANDLE_OLD_PASSWORD_CHANGE: '@formContext/HANDLE_OLD_PASSWORD_CHANGE',
  HANDLE_CONFIRM_PASSWORD_CHANGE: '@formContext/HANDLE_CONFIRM_PASSWORD_CHANGE',
  HANDLE_PASSWORD_EXHIBITION: '@formContext/HANDLE_PASSWORD_EXHIBITION',
};

function reducer(state, action) {
  switch (action.type) {
    case Types.HANDLE_EMAIL_CHANGE:
      return {
        ...state,
        cFieldEmail: { ...state.cFieldEmail, value: action.email },
      };
    case Types.HANDLE_PASSWORD_CHANGE:
      return {
        ...state,
        cFieldPassword: { ...state.cFieldPassword, value: action.password },
      };
    case Types.HANDLE_OLD_PASSWORD_CHANGE:
      return {
        ...state,
        cFieldOldPassword: {
          ...state.cFieldOldPassword,
          value: action.password,
        },
      };
    case Types.HANDLE_CONFIRM_PASSWORD_CHANGE:
      return {
        ...state,
        cFieldConfirmPassword: {
          ...state.cFieldConfirmPassword,
          value: action.password,
        },
      };
    case Types.HANDLE_PASSWORD_EXHIBITION:
      return {
        ...state,
        [action.cField]: {
          ...state[action.cField],
          type: action.fieldType,
        },
      };
    case Types.HANDLE_NAME_CHANGE:
      return {
        ...state,
        cFieldName: { ...state.cFieldName, value: action.name },
      };
    default:
      return state;
  }
}

export { Types, reducer, INITIAL_STATE };
