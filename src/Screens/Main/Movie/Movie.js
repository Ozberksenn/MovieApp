import { SafeAreaView,View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./Movie.style"
const Movie = ({route}) => {
    /* Bu ekranda filme tıkladığımızda o filmin detayına gideceğiz ve o ekranın detayları yer alacak. */ 
    const {poster_path,movieName,description,release_date,vote_average,popularity} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Header}>Movie Detail</Text>
        <Image style={styles.moviePhoto} source={{uri : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}} />
        <Text style={styles.movieName}>{movieName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.options}>Relase Date : {release_date}</Text>
        <Text style={styles.options}>Average : {vote_average}</Text>
        <Text style={styles.options}>Popularity : {popularity}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Movie