import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import RootState from '../store/modules/rootState';
import Drawer from './../components/Drawer';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const signed = useSelector<RootState>((state) => state.auth.signed);
  const auth = useSelector<RootState>((state) => state.auth);

  console.log(auth);
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === signed ? (
          isPrivate === true ? (
            <Drawer>
              <Component />
            </Drawer>
          ) : (
            <Component />
          )
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
