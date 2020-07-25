import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';
import persistReducers from './persistReducers';

const sagaMiddlware = createSagaMiddleware();

const middlewares = [sagaMiddlware];

const store = createStore(persistReducers(rootReducer), middlewares);

const persistor = persistStore(store);

sagaMiddlware.run(rootSaga);

export { store, persistor };
