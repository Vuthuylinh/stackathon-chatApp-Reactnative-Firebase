import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

const LoginScreen =()=>{
  return(
    <View>
      <Text> Login Screen</Text>
      <Button
      title="Login"
      onPress={()=> alert("You just clicked login button")}

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

