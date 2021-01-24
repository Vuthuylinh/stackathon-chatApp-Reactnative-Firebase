
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import OnboardingScreen from './Screens/OnboardingScreen'
import LoginScreen from './Screens/LoginScreen'

const AppStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
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
export default App
