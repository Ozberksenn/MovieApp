import { View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from "./CustomTabBar.style"
import  Icon  from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const CustomTabBar = () => {
    const navigation = useNavigation()
    const [focused,setFocused] = useState(1) // click olduğunda icon rengini değiştirebilmek için tanımladığımız state.

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home') & setFocused(1)}>
           <Icon style={[styles.icon, {color: focused === 1 ? "#fff" : "#000"}]}  name="tv" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search') & setFocused(2)}>
            <Icon   style={[styles.icon, {color: focused === 2 ? "#fff" : "#000"}]}  name="search" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetail') & setFocused(3)}>
            <Icon style={[styles.icon, {color: focused === 3 ? "#fff" : "#000"}]}  name="settings" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomTabBar