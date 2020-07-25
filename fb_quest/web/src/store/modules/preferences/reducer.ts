import produce from 'immer';
import { UpdateAttendancePreferenceActionType } from '../preferences/actions';
import { PreferencesState } from './types';

const initialState: PreferencesState = { attendance: 'delivery' };

export default function user(
  state = initialState,
  action: UpdateAttendancePreferenceActionType,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@preferences/UPDATE_ATTENDANCE_PREFERENCE': {
        draft.attendance = action.payload.data;
        break;
      }

      default:
        return state;
    }
  });
}
