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
};

const Types = {
  HANDLE_EMAIL_CHANGE: '@formContext/HANDLE_EMAIL_CHANGE',
  HANDLE_PASSWORD_CHANGE: '@formContext/HANDLE_PASSWORD_CHANGE',
  HANDLE_PASSWORD_EXHIBITION: '@formContext/HANDLE_PASSWORD_EXHIBITION',
  HANDLE_NAME_CHANGE: '@formContext/HANDLE_NAME_CHANGE',
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
    case Types.HANDLE_PASSWORD_EXHIBITION:
      return {
        ...state,
        cFieldPassword: { ...state.cFieldPassword, type: action.fieldType },
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
