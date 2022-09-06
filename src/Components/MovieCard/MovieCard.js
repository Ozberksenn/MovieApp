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
      poster_path : data.poster_path,
      movieName : data.title,
      description : data.overview,
      release_date : data.release_date,
      vote_average : data.vote_average,
      popularity : data.popularity,

    })}>
        <View style={{flexDirection:"row",marginVertical:15}}>
            <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`}} />
            <View style={styles.Content}>
                <Text style={[styles.MovieTitle,{color:activeTheme.MovieName}]}>{data.title}</Text>
                <Text numberOfLines={3} style={[styles.description,{color:activeTheme.color}]}>{data.overview}</Text>
                {/* numberOfLines ekleyerek açıklamaları 3 satırdan uzunsa gösterme şeklinde belirttik. */ }
                <Text style={styles.rated}>{data.vote_average}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default MovieCard