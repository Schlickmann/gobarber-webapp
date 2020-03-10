const INITIAL_STATE = {
  cFieldEmail: {
    name: 'Email',
    value: '',
    type: 'email',
  },
  cFieldPassword: {
    name: 'Password',
    value: '',
    type: 'password',
  },
  cFieldName: {
    name: 'Name',
    value: '',
    type: 'text',
  },
  cFieldOldPassword: {
    name: 'Old Password',
    value: '',
    type: 'password',
  },
  cFieldConfirmPassword: {
    name: 'Confirm Password',
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
