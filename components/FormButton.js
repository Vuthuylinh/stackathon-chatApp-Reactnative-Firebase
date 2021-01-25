import React from 'react'
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native'
import { windowHeight } from '../utils/Dimentions'
const FormButton = ({ buttonTitle,btnType,color, ...rest }) => {
  return (
    <TouchableOpacity
    style={styles.buttonContainer}{...rest}>
      <View style={styles.iconWrapper}>
      </View>
      <View style={styles.btnTxtWrapper}>
         <Text style={[styles.buttonText, {color:color}]}>{buttonTitle}</Text>
      </View>

    </TouchableOpacity>

  )
}

export default FormButton

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

