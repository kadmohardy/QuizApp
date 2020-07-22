import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
// import console = require('console');

declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (__DEV__) {
  // const ip = '192.168.1.104';
  const ip = '192.168.0.102';

  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure({host: ip})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga({except: ['']}))
    .connect();

  tron.clear!();

  console.tron = tron;
}
