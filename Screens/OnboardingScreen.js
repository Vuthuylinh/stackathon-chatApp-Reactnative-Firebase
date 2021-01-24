import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text>Skip</Text>
    </TouchableOpacity>
  )
}
const Next = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text>Next</Text>
    </TouchableOpacity>
  )
}
const Done = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text>Done</Text>
    </TouchableOpacity>
  )
}

const Dots = (selected) => {
  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  return (
    <View style={{
      width:6,
      height:6,
      marginHorizontal: 3,
      backgroundColor
    }} />
  )
}
const OnboardingScreen = ({ navigation }) => {

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent ={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}

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
