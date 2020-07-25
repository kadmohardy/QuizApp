import { Reducer } from 'redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer) => {
  const persistedReducers = persistReducer(
    {
      key: 'chico',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducers;
};
