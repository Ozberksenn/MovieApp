import { SafeAreaView, View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./SignIn.style"
import Input from '../../../Components/Input/Input'
import Button from '../../../Components/Button/Button'
const SignIn = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/cannes.png")} />
        </View>
        <View>
          <Text style={styles.titleSignIn}>Sign In</Text>
          <Input placeholder="Please can you enter the mail" />
          <Input placeholder="Please can you enter the password" />
          <Button ButtonName="Sign In" />
        </View>
        <View>
          <Text style={styles.accountText}>Don't Have an account ? </Text>
          <Button  ButtonName="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn