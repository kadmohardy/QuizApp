import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const App = createBottomTabNavigator();

const HomeContext = createStackNavigator();

const HomeRoutes = () => (
  <HomeContext.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: '#262626',
      headerStyle: {
        backgroundColor: '#ffffff',
        shadowColor: '#262626',
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      },
      headerTransparent: true,
    }}>
    <HomeContext.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
  </HomeContext.Navigator>
);

const AppRoutes = () => (
  <App.Navigator
    initialRouteName="HomeRoutes"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'HomeRoutes') {
          iconName = 'home';
        }

        return <IconAntDesign name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#262626',
      inactiveTintColor: '#999',
    }}>
    <App.Screen
      name="HomeRoutes"
      component={HomeRoutes}
      options={{tabBarLabel: 'Início'}}
    />
  </App.Navigator>
);

export default AppRoutes;
