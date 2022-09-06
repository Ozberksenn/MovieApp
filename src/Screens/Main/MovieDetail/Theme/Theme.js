import {SafeAreaView ,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Theme.style"
import Icon from "react-native-vector-icons/Feather"

import {useSelector,useDispatch} from "react-redux"
import { toggleTheme } from '../../../../redux/themeSlice'



const Theme = () => {
  const {activeTheme} = useSelector(state => state.theme)
  console.log(activeTheme)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={[styles.themeContainer,{backgroundColor: activeTheme.backgroundColor}]}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => dispatch(toggleTheme())}  style={{marginRight:100,alignItems:"center"}}>
          <Icon style={styles.darkIcon}name='moon'/>
          <Text style={styles.iconText}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => dispatch(toggleTheme())} style={{alignItems:"center"}}>
          <Icon  style={styles.sunIcon} name='sun'/>
          <Text style={styles.iconText}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Theme