// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import {Reducer} from 'redux';

import {persistReducer} from 'redux-persist';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'comeonapp',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
