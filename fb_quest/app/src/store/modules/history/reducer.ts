import produce from 'immer';
import {HistoryAction} from './actions';
import {MockAction} from '../mock/actions';
import {HistoryState} from './types';

const initialState: HistoryState = {
  mocks: null,
};

export default function history(
  state = initialState,
  action: MockAction,
): HistoryState {
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
