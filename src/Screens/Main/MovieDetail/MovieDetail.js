import { View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import styles from "./MovieDetail.style"
import Button from '../../../Components/Button/Button'
const MovieDetail = () => {
  return (
    <SafeAreaView style={styles.movieDetailContainer}>
      <View>
        <View style={{alignItems:"center"}}>
          <Image style={styles.DetailImage} source={{uri : "https://popcultura.com.br/wp-content/uploads/2020/06/TheOfficeColdOpens.jpg"}} />
        </View>
        <View>
          <Button ButtonName="Theme"/>
          <Button ButtonName="Edit Profile" />
        </View>     
      </View>
      <View>
        <Button ButtonName="Log Out" />
      </View>
    </SafeAreaView>
  )
}

export default MovieDetail