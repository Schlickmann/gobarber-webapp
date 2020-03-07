import produce from 'immer';

const Types = {
  HANDLE_SIGN_IN_REQUEST: '@authContext/HANDLE_SIGN_IN_REQUEST',
  HANDLE_SIGN_IN_SUCCESS: '@authContext/HANDLE_SIGN_IN_SUCCESS',
  HANDLE_SIGN_IN_FAILURE: '@authContext/HANDLE_SIGN_IN_FAILURE',
};

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  user: null,
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;

        action.payload.setAuth({
          signed: true,
          token: action.payload.token,
          user: action.payload.user,
        });
        break;
      }
      case Types.HANDLE_SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export { reducer, INITIAL_STATE, Types };
