import {
  IUser,
  IUpdateUserProfileRequest,
  IUpdateUserPlaceRequest,
} from '../../../interfaces/User';

export function typedAction<T extends string>(type: T): {type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): {type: T; payload: P};
export function typedAction(type: string, payload?: any) {
  return {type, payload};
}

export function updateAvatarRequest(data: IUpdateUserPlaceRequest) {
  return typedAction('@user/UPDATE_AVATAR_REQUEST', {data});
}

export function updateAvatarSuccess(user: IUser) {
  return typedAction('@user/UPDATE_AVATAR_SUCCESS', {user});
}

export function updateAvatarFailure() {
  return typedAction('@user/UPDATE_AVATAR_FAILURE');
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
  | typeof updateAvatarRequest
  | typeof updateAvatarSuccess
  | typeof updateAvatarFailure
  | typeof updateUserProfileRequest
  | typeof updateUserProfileSuccess
  | typeof updateUserProfileFailure
>;

export type UpdateAvatarRequestActionType = ReturnType<
  typeof updateAvatarRequest
>;
export type UpdateAvatarSuccessActionType = ReturnType<
  typeof updateAvatarSuccess
>;
export type UpdateAvatarFailureActionType = ReturnType<
  typeof updateAvatarFailure
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
