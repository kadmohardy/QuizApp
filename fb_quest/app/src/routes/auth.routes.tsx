import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerTintColor: '#262626',
      headerStyle: {
        backgroundColor: 'transparent',
      },
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }}
    />
    <Auth.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
