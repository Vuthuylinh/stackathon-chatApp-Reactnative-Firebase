import React, { useState, useContext } from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

isUserEqual =(googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          // googleUser.getAuthResponse().id_token);
          googleUser.idToken,
          googleUser.accessToken
        )
        // Sign in with credential from the Google user.
        firebase
        .auth()
        .signInWithCredential(credential)
        .then(function(result) {
          console.log('user signed in ');
          if (result.additionalUserInfo.isNewUser) {
            firebase
              .database()
              .ref('/users/' + result.user.uid)
              .set({
                gmail: result.user.email,
                profile_picture: result.additionalUserInfo.profile.picture,
                first_name: result.additionalUserInfo.profile.given_name,
                last_name: result.additionalUserInfo.profile.family_name,
                created_at: Date.now()
              })
              .then(function(snapshot) {
                // console.log('Snapshot', snapshot);
              });
          } else {
            firebase
              .database()
              .ref('/users/' + result.user.uid)
              .update({
                last_logged_in: Date.now()
              });
          }
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }
    );
  }


  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: 'web',
        iosClientId: '761084735712-o1v9rel4i4prl8m7srpblb67f5hm6p7n.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.onSignIn(result)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }


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
        onPress={() => alert("Sign in clicked!")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot password? </Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitile="Sign in with Google"
        btnType="google"
        color="red"
        backgroundColor="#f5e7ea"
        onPress={() => this.signInWithGoogleAsync()}
      />
      {/* <SocialButton
        buttonTitile="Sign in with Facebook"
        btnType="facebook"
        color="blue"
        backgroundColor="#e6eaf5"
        onPress={()=>{}}
      /> */}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Signup")}>
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
    justifyContent: 'center',
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

