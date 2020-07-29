import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';

import {
  generateMockFailure,
  generateMockSuccess,
  GenerateMockRequestActionType,
} from './actions';

export function* generateMock(action: GenerateMockRequestActionType) {
  const {questionsCount} = action.payload;

  try {
    const response = yield call(api.get, `/mocks/${questionsCount}`);

    yield put(generateMockSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro ao gerar simulado!', error);
    yield put(generateMockFailure());
  }
}

export default all([takeLatest('@mock/GENERATE_MOCK_REQUEST', generateMock)]);
