import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MyTabs } from './src/navigation';
import { MyTheme } from './src/theme';

const App = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        ...MyTheme,
      }}
    >
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
