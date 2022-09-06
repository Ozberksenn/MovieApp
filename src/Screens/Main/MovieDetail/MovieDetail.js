import { View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import styles from "./MovieDetail.style"
import Button from '../../../Components/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const MovieDetail = () => {
  const {activeTheme} = useSelector(state => state.theme)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={[styles.movieDetailContainer,{backgroundColor: activeTheme.backgroundColor}]}>
      <View>
        <View style={{alignItems:"center"}}>
          <Image style={styles.DetailImage} source={{uri : "https://popcultura.com.br/wp-content/uploads/2020/06/TheOfficeColdOpens.jpg"}} />
        </View>
        <View>
          <Button onPress={() => navigation.navigate('ThemeScreen')} ButtonName="Theme"/>
          <Button onPress={() => navigation.navigate('EditProfile')} ButtonName="Edit Profile" />
        </View>     
      </View>
      <View>
        <Button ButtonName="Log Out" />
      </View>
    </SafeAreaView>
  )
}

export default MovieDetail