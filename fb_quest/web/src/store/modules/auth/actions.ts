import { User } from '../user/types';

import { AuthenticationTypes } from './types';
import { typedAction } from '../typedAction';

export function signInRequest(email: string, password: string) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSuccess(token: string, user: User) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_IN_SUCCESS, {
    token,
    user,
  });
}

export function signUpRequest(name: string, email: string, password: string) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_UP_REQUEST, {
    name,
    email,
    password,
  });
}

export function signFailure() {
  return typedAction(AuthenticationTypes.AUTH_SIGN_FAILURE);
}

export function signOut() {
  return typedAction(AuthenticationTypes.AUTH_SIGN_OUT);
}

export type UserAction = ReturnType<
  | typeof signInRequest
  | typeof signUpRequest
  | typeof signInSuccess
  | typeof signFailure
  | typeof signOut
>;

export type SignInRequestActionType = ReturnType<typeof signInRequest>;
export type SignUpRequestActionType = ReturnType<typeof signUpRequest>;
export type SignInSuccessActionType = ReturnType<typeof signInSuccess>;
export type SignFailureActionType = ReturnType<typeof signFailure>;
export type SignOutActionType = ReturnType<typeof signOut>;
