import React, { useState, useContext } from 'react'
import { View, Text, Button, Image, StyleSheet , TouchableOpacity} from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/react-native-firebase-logo-png-transparent.png')}
        style={styles.logo}
      // source={require('../assets/logo2.png')}
      // style={styles.logo}
      />
      <Text style={styles.text}> RNFireBase ChatNote </Text>
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
        buttonTitle="Sign in"
        onPress={()=>alert("Sign in clicked!")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
        <Text style={styles.navButtonText}>Forgot password? </Text>
      </TouchableOpacity>

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

      <TouchableOpacity
       style={styles.navButton}
       onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.navButtonText}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

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
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});

