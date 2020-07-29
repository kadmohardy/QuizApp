import React from 'react';
import {useSelector} from 'react-redux';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import RootState from 'src/store/modules/rootState';

const Routes = () => {
  const signed = useSelector((state: RootState) => state.auth.signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
