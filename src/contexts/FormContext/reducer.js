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
  HANDLE_FIELD_CHANGE: '@formContext/HANDLE_FIELD_CHANGE',
  HANDLE_PASSWORD_EXHIBITION: '@formContext/HANDLE_PASSWORD_EXHIBITION',
};

function reducer(state, action) {
  switch (action.type) {
    case Types.HANDLE_FIELD_CHANGE:
      return {
        ...state,
        [action.cField]: { ...state[action.cField], value: action.content },
      };
    case Types.HANDLE_PASSWORD_EXHIBITION:
      return {
        ...state,
        [action.cField]: {
          ...state[action.cField],
          type: action.fieldType,
        },
      };
    default:
      return state;
  }
}

export { Types, reducer, INITIAL_STATE };
