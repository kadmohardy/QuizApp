import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]) => {
  return createStore(reducers, applyMiddleware(...middlewares));
};
