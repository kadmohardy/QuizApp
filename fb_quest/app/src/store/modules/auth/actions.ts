import {IUser} from '../../../interfaces/User';

export function typedAction<T extends string>(type: T): {type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): {type: T; payload: P};
export function typedAction(type: string, payload?: any) {
  return {type, payload};
}

export function signInRequest(email: string, password: string) {
  return typedAction('@auth/SIGN_IN_REQUEST', {email, password});
}

export function signInSuccess(token: string, user: IUser) {
  return typedAction('@auth/SIGN_IN_SUCCESS', {token, user});
}

export function signUpRequest(name: string, email: string, password: string) {
  return typedAction('@auth/SIGN_UP_REQUEST', {
    name,
    email,
    password,
  });
}

export function signFailure() {
  return typedAction('@auth/SIGN_FAILURE');
}

export function signOut() {
  return typedAction('@auth/SIGN_OUT');
}

export type AuthAction = ReturnType<
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
