

import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableWithoutFeedback, Touchable, TouchableOpacity } from 'react-native'

const SignupThree = () => {
  return (
    <View style={styles.mainContainer}>


      <View style={styles.appHeadingContainer}>
        <Text style={styles.appHeading}>Education App</Text>
      </View>

      <View style={[styles.containerShadow, { width: '95%', }]}>

        <View style={[styles.inputContainer]}>
          <Text style={styles.mainHeading}>Sign up</Text>
          <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='user name' />
          <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='email' />
          <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='phone' />
          <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='passowrd' />
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.shadow]}>
          <Text style={styles.buttonStyle}>Sign up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
          <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png ' }} />
          <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' }} />
        </View>
      </View>

    </View>

  )
}

export default SignupThree


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },

  appHeadingContainer: {
    backgroundColor: '#499BFD',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appHeading: {
    color: 'white',
    fontSize: 20
  },

  containerShadow: {
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },

  mainHeading: {
    fontSize: 30,
    marginBottom: 20,
    color: '#499BFD',
  },

  iconStyle: {
    width: 70,
    height: 70
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15
  },

  inputStyle: {
    width: '90%',
    borderRadius: 100,
    paddingLeft: 20,
    margin: 5,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },

  buttonContainer: {
    backgroundColor: "#499BFD",
    width: '90%',
    borderRadius: 100,
    margin: 10
  },

  buttonStyle: {
    padding: 15,
    color: 'white',
    textAlign: 'center'
  },
})
