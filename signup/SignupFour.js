
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableWithoutFeedback, Touchable, TouchableOpacity } from 'react-native'

const SignupFour = () => {
    return (
        <View>
            <View style={{ alignItems: 'center', margin: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome</Text>
                <Text>Sign up into your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.textColor, styles.mainHeading]}>Sign Up</Text>
                <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='user name'
                    placeholderTextColor="white"
                />
                <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='email'
                    placeholderTextColor="white" keyboardType='email-address'
                />
                <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='phone'
                    placeholderTextColor="white" keyboardType='numeric'
                />
                <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='passowrd'
                    placeholderTextColor="white" secureTextEntry={true}
                />

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{ textAlign: 'center' }}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Text style={{ textAlign: 'center' }}>Already have an account ? <Text style={{ color: '#336CEF' }}>Login</Text> </Text>
        </View>
    )
}

export default SignupFour

const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: '#336CEF',
      color: 'white',
      padding: 40,
      margin: 10,
      borderTopLeftRadius: 70,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 70,
      borderBottomLeftRadius: 20
    },
  
    mainHeading: {
      fontSize: 25,
      marginBottom: 20
    },
    textColor: {
      color: 'white'
    },
  
    inputStyle: {
      width: '90%',
      borderRadius: 4,
      paddingLeft: 20,
      margin: 5,
      borderWidth: 0.5,
      borderColor: 'white'
    },
  
    buttonStyle: {
      backgroundColor: 'white',
      width: '40%',
      paddingTop: 9,
      paddingBottom: 9,
      borderRadius: 100,
      margin: 9
    }
  })
  
  