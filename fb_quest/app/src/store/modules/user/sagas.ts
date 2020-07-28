import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';

import {
  updateUserProfileSuccess,
  updateUserProfileFailure,
  UpdateProfileRequestActionType,
  //updateUserPlaceSuccess,
  //updateUserPlaceFailure,
} from './actions';

export function* updateUserProfile(action: UpdateProfileRequestActionType) {
  const {userId, data} = action.payload;
  const request = {
    data: data,
  };
  console.tron.log('REQUEST', request);
  try {
    const response = yield call(api.patch, `/users/${userId}`, request);

    const user = response.data;

    //yield put(updateUserProfileSuccess(user));

    Alert.alert('Dados atualizados com sucesso');
  } catch (error) {
    Alert.alert('Erro ao atualizar dados!', error);
    yield put(updateUserProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_USER_PROFILE_REQUEST', updateUserProfile),
]);
