import produce from 'immer';
import {IUser} from './../../../interfaces/User';
import {AuthAction} from '../auth/actions';
import {UserAction} from './actions';
import {CheckInAction, CheckInSuccessActionType} from '../checkIn/actions';

type UserState = {
  profile: IUser | null;
  loading: boolean;
};

const initialState: UserState = {
  profile: null,
  loading: false,
};

export default function user(
  state = initialState,
  action: AuthAction | UserAction | CheckInAction,
): UserState {
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

      case '@user/UPDATE_AVATAR_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@checkIn/CHECK_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@checkIn/CHECK_OUT_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@user/UPDATE_USER_PROFILE_SUCCESS': {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }

      case '@user/UPDATE_USER_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/UPDATE_USER_PROFILE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
