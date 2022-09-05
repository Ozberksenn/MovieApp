import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./FilterButton.style"
const FilterButton = ({filterButtonName,onPress}) => {
    {/* istek atacağımız Home ekranında bulunan butonlar. */ }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{filterButtonName}</Text>
    </TouchableOpacity>
  )
}

export default FilterButton