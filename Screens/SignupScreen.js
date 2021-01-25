import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

const LoginScreen =()=>{
  return(
    <View>
      <Text> Signup Screen</Text>
      <Button
      title="click to signup"
      onPress={()=> alert("You just clicked signup button")}

      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

