import { AuthenticationState } from '../modules/auth/types';
import { ProfileState } from '../modules/user/types';

export default interface RootState {
  auth: AuthenticationState;
  user: { profile: ProfileState };
}
