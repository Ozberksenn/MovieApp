import { SafeAreaView, View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./SignIn.style"
import Input from '../../../Components/Input/Input'
import Button from '../../../Components/Button/Button'
import { useSelector } from 'react-redux'
const SignIn = ({navigation}) => {
  const {activeTheme} = useSelector(state => state.theme)

  
  return (
    <SafeAreaView style={[styles.container,{backgroundColor: activeTheme.backgroundColor}]} >
      <View >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../assets/cannes.png")} />
        </View>
        <View>
          <Text style={[styles.titleSignIn,{color: activeTheme.signTitle}]}>Sign In</Text>
          <Input placeholder="Please can you enter the mail" />
          <Input placeholder="Please can you enter the password" />
          <Button onPress={() => navigation.navigate('Main')} ButtonName="Sign In" />
        </View>
        <View>
          <Text style={[styles.accountText,{color:activeTheme.color}]}>Don't Have An Account ? </Text>
          <Button onPress={() => navigation.navigate('SignUp')}  ButtonName="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn