import 'react-native-gesture-handler';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

import {IUser} from './interfaces/User';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4364f7" />
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};
export default App;
