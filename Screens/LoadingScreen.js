import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import firebase from './firebase'

const LoadingScreen = () => {
  componentDidMount(){
    this.checkIfLoggedIn()
  }
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('HomeScreen')
      } else[
        this.props.navigation.navigate("Login")
      ]
    })
  }
  return (
    <View style={styles.container} >
     <ActivityIndicator size ='large'/>
    </View>
  )
}

export default LoadingScreen
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})
