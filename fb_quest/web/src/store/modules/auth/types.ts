export enum AuthenticationTypes {
  AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  AUTH_SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  AUTH_SIGN_UP_SUCCESS = '@auth/SIGN_UP_SUCCESS',
  AUTH_SIGN_OUT = '@auth/SIGN_OUT',
  AUTH_SIGN_FAILURE = '@auth/SIGN_FAILURE',
}

export interface AuthenticationState {
  token: string | null;
  signed: boolean;
  loading: boolean;
}
