import {
  createStore,
  compose,
  applyMiddleware,
  Reducer,
  Middleware,
} from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]) => {
  // const enhancer =
  //   process.env.NODE_ENV === 'development'
  //     ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
  //     : applyMiddleware(...middlewares);

  return createStore(reducers, applyMiddleware(...middlewares));
};
