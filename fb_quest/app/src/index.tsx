import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import {store, persistor} from './store';

import App from './App';

const Index: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {/* <StatusBar barStyle="light-content" background="#0052d4" /> */}
      <App />
    </PersistGate>
  </Provider>
);

export default Index;
