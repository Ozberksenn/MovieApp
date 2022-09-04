import {Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Button.style"
const Button = ({ButtonName,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
      <Text style={styles.ButtonName}>{ButtonName}</Text>
    </TouchableOpacity>
  )
}

export default Button