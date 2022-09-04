import { View,SafeAreaView ,Text } from 'react-native'
import React from 'react'
import styles from "./SignUp.style"
import Input from '../../../Components/Input/Input'
import Button from '../../../Components/Button/Button'
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View>
        <Text style={styles.signUpTitle}>Sign Up</Text>
      </View>
      <View>
        <Input placeholder="Email" />
        <Input placeholder="User Name" />
        <Input placeholder="Password" />
        <Input placeholder="Password(Again)" />
        <Button ButtonName="Sign Up" />
      </View>
      <View>
        <Text style={styles.accountText}>Do You Have An Account ? </Text>
        <Button onPress={() => navigation.navigate('SignIn')} ButtonName="Sign In"/>
      </View>
    </SafeAreaView>
  )
}

export default SignUp