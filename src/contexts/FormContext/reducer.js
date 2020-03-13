const INITIAL_STATE = {
  cFieldEmail: {
    name: 'email',
    label: 'Email',
    value: '',
    type: 'email',
  },
  cFieldPassword: {
    name: 'password',
    label: 'Password',
    value: '',
    type: 'password',
  },
  cFieldName: {
    name: 'name',
    label: 'Name',
    value: '',
    type: 'text',
  },
  cFieldOldPassword: {
    name: 'oldPassword',
    label: 'Old Password',
    value: '',
    type: 'password',
  },
  cFieldConfirmPassword: {
    name: 'passwordConfirmation',
    label: 'Confirm Password',
    value: '',
    type: 'password',
  },
  cFieldAvatar: {
    name: 'avatar_id',
    value: '',
    url: null,
    type: 'file',
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
        [action.payload.cField]: {
          ...state[action.payload.cField],
          value: action.payload.content,
        },
      };
    case Types.HANDLE_PASSWORD_EXHIBITION:
      return {
        ...state,
        [action.payload.cField]: {
          ...state[action.payload.cField],
          type: action.payload.fieldType,
        },
      };
    case Types.HANDLE_AVATAR_URL_UPDATE:
      return {
        ...state,
        cFieldAvatar: {
          ...state.cFieldAvatar,
          url: action.payload.url,
          value: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export { Types, reducer, INITIAL_STATE };
