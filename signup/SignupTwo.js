
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableWithoutFeedback, Touchable, TouchableOpacity } from 'react-native'

const SignupTwo = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.iconStyle} source={{ uri: 'https://nagriksevakendra.in/default/login/avatar.png' }} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.mainHeading}>Sign up</Text>
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='user name' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='email'
                    keyboardType='email-address'
                />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='phone'
                    keyboardType='numeric'
                />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='passowrd'
                    secureTextEntry={true} />
            </View>

            <View style={[styles.buttonStyle]} >
                <Button style={[styles.buttonStyle, styles.shadow]} title='Sign up' color="#1AB294"

                />
            </View>
        </View>
    )
}

export default SignupTwo

const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      marginTop: 10
    },
  
    mainHeading: {
      fontSize: 30,
      marginBottom: 20
    },
  
    iconStyle: {
      width: 70,
      height: 70
    },
  
    inputContainer: {
      width: '100%',
      alignItems: 'center',
    },
  
    inputStyle: {
      width: '90%',
      borderRadius: 10,
      paddingLeft: 20,
      margin: 5
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
  
    buttonStyle: {
      width: '90%',
      margin: 15
    },
  })
  