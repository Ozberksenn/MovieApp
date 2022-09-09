import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Movie.style';
import {useSelector} from 'react-redux';
const Movie = ({route}) => {
  /* Bu ekranda filme tıkladığımızda o filmin detayına gideceğiz ve o ekranın detayları yer alacak. */
  const {
    poster_path,
    movieName,
    description,
    release_date,
    vote_average,
    popularity,
  } = route.params;
  const {activeTheme} = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <ScrollView>
        <Text style={[styles.Header, {color: activeTheme.headerTitle}]}>
          Movie Detail
        </Text>
        <Image
          style={styles.moviePhoto}
          source={{
            uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
          }}
        />
        <Text style={[styles.movieName, {color: activeTheme.MovieName}]}>
          {movieName}
        </Text>
        <Text style={[styles.description, {color: activeTheme.color}]}>
          {description}
        </Text>
        <Text style={styles.options}>Relase Date : {release_date}</Text>
        <Text style={styles.options}>Average : {vote_average}</Text>
        <Text style={styles.options}>Popularity : {popularity}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movie;
