import {Alert} from 'react-native';
import {takeLatest, call, put, all, delay} from 'redux-saga/effects';

import api from '../../../services/api';

import {signFailure, signInSuccess} from './actions';
import {
  SignInRequestActionType,
  SignUpRequestActionType,
} from './../auth/actions';

export function* signIn(action: SignInRequestActionType) {
  try {
    const {email, password} = action.payload;

    const response = yield call(api.post, '/sessions', {email, password});

    const {data, meta} = response.data;

    api.defaults.headers.Authorization = `Bearer ${meta.token}`;
    yield delay(3000);

    yield put(signInSuccess(meta.token, data));
  } catch (error) {
    Alert.alert('Erro no login', 'Verique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp(action: SignUpRequestActionType) {
  try {
    const {name, birthdate, gender, phone, email, password} = action.payload;

    yield call(api.post, '/users', {
      name,
      birthdate,
      gender,
      phone,
      email,
      password,
    });
    Alert.alert('Cadastro ', 'Cadastro realizado com sucesso!');
  } catch (error) {
    Alert.alert('Falha no cadastro', 'Verique seus dados!');
    yield put(signFailure());
  }
}

export function setToken(token: string) {
  if (!token) {
    return;
  }

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
