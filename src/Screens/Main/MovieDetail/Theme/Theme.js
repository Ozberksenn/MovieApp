import {SafeAreaView ,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Theme.style"
import Icon from "react-native-vector-icons/Feather"
const Theme = () => {
  return (
    <SafeAreaView style={styles.themeContainer}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{marginRight:100,alignItems:"center"}}>
          <Icon style={styles.darkIcon}name='moon'/>
          <Text style={styles.iconText}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:"center"}}>
          <Icon  style={styles.sunIcon} name='sun'/>
          <Text style={styles.iconText}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Theme