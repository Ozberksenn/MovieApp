import { SafeAreaView,View, Text } from 'react-native'
import React from 'react'
import styles from "./EditProfile.style"
import Input from "../../../../Components/Input/Input"
import Button from "../../../../Components/Button/Button"
import { useSelector } from 'react-redux'
const EditProfile = () => {
  const {activeTheme} = useSelector(state => state.theme)
  return (
    <SafeAreaView style={[styles.EditProfileContainer,{backgroundColor:activeTheme.backgroundColor}]}>
      <View>
        <Text style={styles.titles}>User Name</Text>
        <Input placeholder="User Name" />
        <Text style={styles.titles} >E-Mail</Text>
        <Input placeholder="E-mail" />
        <Text style={styles.titles}>Password</Text>
        <Input placeholder="Password" />
        <View style={{marginTop:40}}>
          <Button ButtonName="Save" />
        </View>
      </View>
      <Text></Text>
    </SafeAreaView>
  )
}

export default EditProfile