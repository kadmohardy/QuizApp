import produce from 'immer';
import {HistoryAction} from './actions';
import {MockAction} from '../mock/actions';
import {MockHistoryRegisterState} from './types';

const initialState: MockHistoryRegisterState = {
  mocks: null,
};

export default function history(
  state = initialState,
  action: MockAction,
): MockHistoryRegisterState {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@mock/FINISH_MOCK': {
        const historyLength = draft.mocks ? draft.mocks.length : 0;

        break;
      }

      default:
        return state;
    }
  });
}
