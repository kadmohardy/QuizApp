import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppProvider from './hooks';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>

    <GlobalStyle />
  </Router>
);
export default App;
