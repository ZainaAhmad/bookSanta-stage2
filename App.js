import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

export default function App() {
  return (
   <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const SwitchNavigator=createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer= createAppContainer(SwitchNavigator)