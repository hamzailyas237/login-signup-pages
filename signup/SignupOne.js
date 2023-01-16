

import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, TouchableWithoutFeedback, Touchable, TouchableOpacity } from 'react-native'
import user from '../assets/user.png'

const SignupOne = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.iconStyle} source={user} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.mainHeading}>Sign up</Text>
                <TextInput underlineColorAndroid='transparent' style={[styles.inputStyle, styles.shadow]} placeholder='user name' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='email' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='phone' />
                <TextInput style={[styles.inputStyle, styles.shadow]} placeholder='passowrd' />
            </View>

            <View style={[styles.buttonStyle]} >
                <Button style={[styles.buttonStyle, styles.shadow]} title='Sign up' color="#0858D6" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png ' }} />
                <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' }} />
            </View>

        </View>
    )
}

export default SignupOne


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