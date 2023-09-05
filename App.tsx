/**
 * Product App
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ActivityIndicator } from 'react-native';

import Router from '@navigation'
import { store, persistor } from 'src/store';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer><Router /></NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
