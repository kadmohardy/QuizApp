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

export function generateMockRequest(questionsCounts: number) {
  return typedAction('@user/GENERATE_MOCK_REQUEST', {questionsCounts});
}

export function generateMockSuccess(mock: number) {
  return typedAction('@user/GENERATE_MOCK_SUCCESS', {data});
}

export function generateMockFailure() {
  return typedAction('@user/GENERATE_MOCK_FAILURE');
}

export type MockAction = ReturnType<
  | typeof generateMockRequest
  | typeof generateMockSuccess
  | typeof generateMockFailure
>;

export type GenerateMockRequestActionType = ReturnType<
  typeof generateMockRequest
>;
export type GenerateMockSuccessActionType = ReturnType<
  typeof generateMockSuccess
>;
export type GenerateMockFailureActionType = ReturnType<
  typeof generateMockFailure
>;
