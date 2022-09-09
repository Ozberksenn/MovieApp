import {View, Text, TextInput, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './Search.style';
import {useSelector} from 'react-redux';
import MovieCard from '../../../Components/MovieCard/MovieCard';
import axios from 'axios';
const Search = () => {
  const {activeTheme} = useSelector(state => state.theme);
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState(null);

  const handleSubmit = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=84c4c1e940f1e77c4ef491c8ff9ede7e&language=en-US&query=${search}&page=1&include_adult=false`,
    );
    setSearchData(response.data.results);
  }; // film adına göre filtreleme işlemi yapıldı.

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <Text style={[styles.searchTitle, {color: activeTheme.headerTitle}]}>
        Search
      </Text>
      <View style={styles.searchInput}>
        <TextInput
          placeholderTextColor="#000"
          style={styles.searchInputText}
          placeholder="Search"
          onChangeText={value => setSearch(value)}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <View>
        {searchData && (
          <FlatList
            data={searchData}
            renderItem={({item}) => <MovieCard data={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Search;
