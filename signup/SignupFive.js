

import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableWithoutFeedback, Touchable, TouchableOpacity } from 'react-native'

const SignupFive = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                {/* <Image source={user} /> */}
                <Image style={styles.iconStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&usqp=CAU' }} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.mainHeading}>Sign up</Text>
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='user name' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='email' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='phone' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='passowrd' />
            </View>

            <View style={[styles.buttonStyle]} >
                <Button style={[styles.buttonStyle, styles.shadow]} title='Sign up' color="#0858D6" />
            </View>
        </View>
    )
}

export default SignupFive

const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      marginTop:10
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
      borderRadius: 4,
      paddingLeft: 20,
      margin: 5
    },
  
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
  
    buttonStyle: {
      width: '90%',
      margin: 15
    }
  })
  