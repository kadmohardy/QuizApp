import produce from 'immer';

import { UserAction } from '../auth/actions';
import { ProfileState } from './types';

type Profile = {
  profile: ProfileState | null;
};

const initialState: Profile = {
  profile: null,
};

export default function user(
  state = initialState,
  action: UserAction,
): Profile {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;

        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
        return state;
    }
  });
}
