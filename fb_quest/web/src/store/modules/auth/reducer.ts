import produce from 'immer';

import { UserAction } from './actions';
import { Reducer } from 'react';

import { AuthenticationState, AuthenticationTypes } from './types';
const initialState: AuthenticationState = {
  token: null,
  signed: false,
  loading: false,
};

// const auth: Reducer<AuthenticationState> =
export default function auth(
  state = initialState,
  action: UserAction,
): AuthenticationState {
  return produce(state, (draft) => {
    switch (action.type) {
      case AuthenticationTypes.AUTH_SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case AuthenticationTypes.AUTH_SIGN_IN_SUCCESS: {
        console.log('REDUCER DE ATUH', action.payload);
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case AuthenticationTypes.AUTH_SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      case AuthenticationTypes.AUTH_SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
