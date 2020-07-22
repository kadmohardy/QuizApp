import React from 'react';
import {useSelector} from 'react-redux';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const state = useSelector((state) => state);

  const signed = useSelector((state) => state.auth.signed);
  console.tron.log(state);
  ///return signed ? <AppRoutes /> : <AuthRoutes />;
  return <AppRoutes />;

};

export default Routes;
