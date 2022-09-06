import { View,SafeAreaView ,Text } from 'react-native'
import React from 'react'
import styles from "./SignUp.style"
import Input from '../../../Components/Input/Input'
import Button from '../../../Components/Button/Button'
import { useSelector } from 'react-redux'
const SignUp = ({navigation}) => {
  const {activeTheme} = useSelector(state => state.theme)
  return (
    <SafeAreaView style={[styles.signUpContainer,{backgroundColor:activeTheme.backgroundColor}]}>
      <View>
        <Text style={[styles.signUpTitle,{color:activeTheme.signTitle}]}>Sign Up</Text>
      </View>
      <View>
        <Input placeholder="Email" />
        <Input placeholder="User Name" />
        <Input placeholder="Password" />
        <Input placeholder="Password(Again)" />
        <Button ButtonName="Sign Up" />
      </View>
      <View>
        <Text style={[styles.accountText,{color:activeTheme.color}]}>Do You Have An Account ? </Text>
        <Button onPress={() => navigation.navigate('SignIn')} ButtonName="Sign In"/>
      </View>
    </SafeAreaView>
  )
}

export default SignUp