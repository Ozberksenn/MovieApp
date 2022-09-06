import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./MovieCard.style"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const MovieCard = ({data}) => {
  const {activeTheme} = useSelector(state => state.theme)
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Movie',{
      backdrop_path : data.backdrop_path,
      movieName : data.title,
      description : data.overview,
      release_date : data.release_date,
      vote_average : data.vote_average,
      popularity : data.popularity,

    })}>
        <View style={{flexDirection:"row",marginVertical:15}}>
            <Image style={styles.image} source={{uri: data.logo_path}} />
            <View style={styles.Content}>
                <Text style={[styles.MovieTitle,{color:activeTheme.MovieName}]}>{data.title}</Text>
                <Text style={[styles.description,{color:activeTheme.color}]}>{data.overview}</Text>
                <Text style={styles.rated}>{data.vote_average}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default MovieCard