import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from "./Input.style"
const Input = ({placeholder,onChangeText,value}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholderTextColor="#A5C9CA" value={value} onChangeText={onChangeText} style={styles.inputText} placeholder={placeholder} />
    </View>
  )
}

export default Input