import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

const Types = {
  HANDLE_SIGN_UP_REQUEST: '@authContext/HANDLE_SIGN_UP_REQUEST',
  HANDLE_SIGN_UP_SUCCESS: '@authContext/HANDLE_SIGN_UP_SUCCESS',
  HANDLE_SIGN_UP_FAILURE: '@authContext/HANDLE_SIGN_UP_FAILURE',
  HANDLE_UPDATE_REQUEST: '@authContext/HANDLE_UPDATE_REQUEST',
  HANDLE_UPDATE_SUCCESS: '@authContext/HANDLE_UPDATE_SUCCESS',
  HANDLE_UPDATE_FAILURE: '@authContext/HANDLE_UPDATE_FAILURE',
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.HANDLE_SIGN_UP_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.HANDLE_SIGN_UP_SUCCESS: {
        draft.loading = false;

        break;
      }
      case Types.HANDLE_SIGN_UP_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export { Types, reducer, INITIAL_STATE };
