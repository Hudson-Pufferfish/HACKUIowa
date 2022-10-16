// import { StatusBar } from "expo-status-bar";

import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./navigation/index.js";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#252525' }}>
            <StatusBar barStyle={'light-content'} />
            <AppNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
