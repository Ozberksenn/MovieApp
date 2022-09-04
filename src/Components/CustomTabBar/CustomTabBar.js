import { View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from "./CustomTabBar.style"
import  Icon  from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const CustomTabBar = () => {
    const [focused,setFocused] = useState(0)
    const navigation = useNavigation()

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <Icon onPress={() => setFocused(1)} style={[styles.icon, {color: focused === 1 ? "#000" : "#333"}]}  name="home" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon onPress={() => setFocused(2)} style={[styles.icon, {color: focused === 2 ? "#000" : "#333"}]}  name="search" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
            <Icon onPress={() => setFocused(3)} style={[styles.icon, {color: focused === 3 ? "#000" : "#333"}]}  name="settings" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomTabBar