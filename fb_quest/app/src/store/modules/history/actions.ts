import {MockHistoryRegisterState} from './types';

export function typedAction<T extends string>(type: T): {type: T};
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P,
): {type: T; payload: P};
export function typedAction(type: string, payload?: any) {
  return {type, payload};
}

export function generateNewMockHistoryRegister(mock: MockHistoryRegisterState) {
  return typedAction('@history/GENERATE_NEW_MOCK_HISTORY_REGISTER', {mock});
}

export type HistoryAction = ReturnType<typeof generateNewMockHistoryRegister>;
