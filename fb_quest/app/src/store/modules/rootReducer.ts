import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import mock from './mock/reducer';
import history from './history/reducer';

export default combineReducers({
  auth,
  user,
  mock,
  history,
});
