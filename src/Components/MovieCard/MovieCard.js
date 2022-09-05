import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./MovieCard.style"
const MovieCard = ({data}) => {
  return (
    <View>
        <View style={{flexDirection:"row",marginVertical:15}}>
            <Image style={styles.image} source={{uri: data.logo_path}} />
            <View style={styles.Content}>
                <Text style={styles.MovieTitle}>{data.title}</Text>
                <Text style={styles.description}>{data.overview}</Text>
                <Text style={styles.rated}>{data.vote_average}</Text>
            </View>
        </View>
    </View>
  )
}

export default MovieCard