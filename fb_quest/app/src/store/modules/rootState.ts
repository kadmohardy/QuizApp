import {AuthenticationState} from '../modules/auth/types';
import {ProfileState} from '../modules/user/types';
import {MockState} from '../modules/mock/types';
import {HistoryState} from '../modules/history/types';

export default interface RootState {
  auth: AuthenticationState;
  user: {profile: ProfileState};
  mock: MockState;
  history: HistoryState;
}
