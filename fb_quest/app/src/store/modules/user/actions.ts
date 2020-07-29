import {IUser, IUpdateUserProfileRequest} from '../../../interfaces/User';

export function typedAction<T extends string>(type: T): {type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): {type: T; payload: P};
export function typedAction(type: string, payload?: any) {
  return {type, payload};
}

export function updateUserProfileRequest(
  userId: number,
  data: IUpdateUserProfileRequest,
) {
  return typedAction('@user/UPDATE_USER_PROFILE_REQUEST', {userId, data});
}

export function updateUserProfileSuccess(user: IUser) {
  return typedAction('@user/UPDATE_USER_PROFILE_SUCCESS', {user});
}

export function updateUserProfileFailure() {
  return typedAction('@user/UPDATE_USER_PROFILE_FAILURE');
}

export type UserAction = ReturnType<
  | typeof updateUserProfileRequest
  | typeof updateUserProfileSuccess
  | typeof updateUserProfileFailure
>;

export type UpdateProfileRequestActionType = ReturnType<
  typeof updateUserProfileRequest
>;
export type UpdateProfileSuccessActionType = ReturnType<
  typeof updateUserProfileSuccess
>;
export type UpdateProfileFailureActionType = ReturnType<
  typeof updateUserProfileFailure
>;
