import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const Skip =({...props})=>{
  return(
    <TouchableOpacity {...props}>
       <Text>Skip</Text>
    </TouchableOpacity>
  )
}
const Next =({...props})=>{
  return(
    <TouchableOpacity {...props}>
       <Text>Next</Text>
    </TouchableOpacity>
  )
}

const OnboardingScreen = ({navigation}) => {

  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    onSkip ={()=> navigation.replace("Login")}
    onDone ={()=> navigation.navigate("Login")}

      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/book_icon.png')} />,
          title: 'Read some book',
          subtitle: 'Onboarding1',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/searchicon.png')} />,
          title: 'Take some note',
          subtitle: 'onboarding2',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-icon3.png')} />,
          title: 'Chat with friends',
          subtitle: 'onboarding3',
        }
      ]}
    />
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
