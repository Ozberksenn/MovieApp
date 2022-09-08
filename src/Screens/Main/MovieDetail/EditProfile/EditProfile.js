import { SafeAreaView,View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./EditProfile.style"
import Input from "../../../../Components/Input/Input"
import Button from "../../../../Components/Button/Button"
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../../../../redux/userSlice'
const EditProfile = () => {
  const dispatch = useDispatch();
  const {activeTheme} = useSelector(state => state.theme)
  const {userInfo} = useSelector(state=> state.user)

  // const [userName,setuserName] = useState()
  // const [mail,setMail] = useState()
  // const [password,setPassword] = useState()

  // const handleSaveButon = () => {
  //   postRequests()
  // }

  // const postRequests = () => {
  //   dispatch(addUser({email:mail,userName:userName,password:password,passwordAgain:password}))
  // }
  // console.log(userInfo)

  return (
    <SafeAreaView style={[styles.EditProfileContainer,{backgroundColor:activeTheme.backgroundColor}]}>
      <View>
        <Text style={styles.titles}>User Name</Text>
        <Input onChangeText={(value) => setuserName(value)} placeholder="User Name" />
        <Text style={styles.titles} >E-Mail</Text>
        <Input defaultValue={userInfo?.email} onChangeText={(value) => setMail(value)} placeholder="E-mail" />
        <Text style={styles.titles}>Password</Text>
        <Input onChangeText={(value) => setPassword(value)} placeholder="Password" />
        <View style={{marginTop:40}}>
          <Button  ButtonName="Save" />
        </View>
      </View>
      <Text></Text>
    </SafeAreaView>
  )
}

export default EditProfile