import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Configs from '../pages/Configs';
import Mocks from '../pages/Mocks';
import Question from '../pages/Question';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';

const App = createBottomTabNavigator();

const HomeContext = createStackNavigator();

const ProfileContext = createStackNavigator();

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
    <HomeContext.Screen name="Question" component={Question} />
  </HomeContext.Navigator>
);

const ProfileRoutes = () => (
  <ProfileContext.Navigator
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
    <ProfileContext.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
    <ProfileContext.Screen
      name="ProfileEdit"
      component={ProfileEdit}
      options={{tabBarVisible: false}}
    />
  </ProfileContext.Navigator>
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
        if (route.name === 'Mocks') {
          iconName = 'dashboard';
        }
        if (route.name === 'ProfileRoutes') {
          iconName = 'user';
        }

        return <IconAntDesign name={iconName} size={size} color={color} />;
      },
      tabBarVisible: () => {
        return false;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#262626',
      inactiveTintColor: '#999',
      style: {
        height: 56,
        paddingTop: 5,
        paddingBottom: 5,
      },
    }}>
    <App.Screen
      name="Mocks"
      component={Mocks}
      options={{tabBarLabel: 'Avaliações'}}
    />
    <App.Screen
      name="HomeRoutes"
      component={HomeRoutes}
      options={{tabBarLabel: 'Início'}}
    />
    <App.Screen
      name="ProfileRoutes"
      component={ProfileRoutes}
      options={{tabBarLabel: 'Perfil'}}
    />
    {/* <App.Screen
      name="Configs"
      component={Configs}
      options={{tabBarLabel: 'Configuracões'}}
    /> */}
  </App.Navigator>
);

export default AppRoutes;
