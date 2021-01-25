import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"

import AsyncStorage from '@react-native-community/async-storage'

import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  const [isFirstLaunch,setIsFirstLaunch] = useState(null);
  let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true')
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  },[])

  if(isFirstLaunch === null){
    return <Text> Loading...</Text>
  }else if(isFirstLaunch === true){
    return(
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{header:()=>null}}
            />
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header:()=>null}}
            />
            <Stack.Screen
            name="Signup"
            component ={SignupScreen}
            />
        </Stack.Navigator>
    )
  }else{
    return
      <LoginScreen/>
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AuthStack
