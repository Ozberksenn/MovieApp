import { SafeAreaView,View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from "./EditProfile.style"
import Input from "../../../../Components/Input/Input"
import Button from "../../../../Components/Button/Button"
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { updateUser } from '../../../../redux/userSlice'  
import { useNavigation } from '@react-navigation/native'
const EditProfile = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const {activeTheme} = useSelector(state => state.theme)
  const {userInfo} = useSelector(state=> state.user)

  const [mail,setEditMail] = useState()
  const [password,setEditPassword] = useState()
  const [passwordAgain,setEditPasswordAgain] = useState()

  const handleSaveButon = () => {
    if(mail && password && passwordAgain) {
      dispatch(updateUser({updateMail:mail,updatePassword:password,updatePasswordAgain:passwordAgain})) // bilgileri global state de değiştirdik.
      navigation.navigate('MovieDetail')
    }else{
      Alert.alert('Warning','values should not be empty')
    }
  }
  console.log("Edit Profil page then edited info, userInfo : ",userInfo)
 

  return (
    <SafeAreaView style={[styles.EditProfileContainer,{backgroundColor:activeTheme.backgroundColor}]}>
      <View>
        <Text style={styles.titles} >E-Mail</Text>
        <Input defaultValue={userInfo?.signMail} onChangeText={(value) => setEditMail(value)} placeholder="E-mail" />
        <Text style={styles.titles}>Password</Text>
        <Input defaultValue={userInfo?.signPassword} onChangeText={(value) => setEditPassword(value)} placeholder="Password" />
        <Text style={styles.titles}>Password Again</Text>
        <Input defaultValue={userInfo?.signPassword} onChangeText={(value) => setEditPasswordAgain(value)} placeholder="Password Again" />
        <View style={{marginTop:40}}>
          <Button onPress={handleSaveButon} ButtonName="Save" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile