import React, { useState, useContext } from 'react'
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Create new account </Text>
      <FormInput
        lableValue={email}
        onChangeText={(inputEmail) => setEmail(inputEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        lableValue={password}
        onChangeText={(inputPassword) => setPassword(inputPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextentry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={()=>alert("Sign up clicked!")}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate} > By registering, you confirm that you accept our </Text>
        <TouchableOpacity onPress={()=>{alert("Go to Trems of service page")}}>
          <Text style={[styles.color_textPrivate, {color:"#e88832"}]}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate} >and</Text>
        <TouchableOpacity onPress={()=>{alert("Go to Privacy Policy page")}}>
          <Text style={[styles.color_textPrivate, {color:"#e88832"}]}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <SocialButton
        buttonTitile="Sign in with Google"
        btnType="google"
        color="red"
        backgroundColor="#f5e7ea"
        onPress={()=>{}}
      />
      <SocialButton
        buttonTitile="Sign in with Facebook"
        btnType="facebook"
        color="blue"
        backgroundColor="#e6eaf5"
        onPress={()=>{}}
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    justifyContent:'center',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

