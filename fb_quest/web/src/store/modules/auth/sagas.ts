import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AuthenticationTypes } from './types';

import api from '../../../services/api';
import { signFailure, signInSuccess } from './actions';
import {
  SignInRequestActionType,
  SignUpRequestActionType,
} from './../auth/actions';

export function* signIn(action: SignInRequestActionType) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, '/sessions', { email, password });
    console.log('TESTANDO LOGIN', response);

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (error) {
    yield put(signFailure());
  }
}

export function* signUp(action: SignUpRequestActionType) {
  try {
    const { name, email, password } = action.payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });
    alert('Usúario cadastrado com sucesso!');
  } catch (error) {
    alert('Erro no cadastro de usuário!');

    yield put(signFailure());
  }
}

export default all([
  takeLatest(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(AuthenticationTypes.AUTH_SIGN_UP_REQUEST, signUp),
]);
