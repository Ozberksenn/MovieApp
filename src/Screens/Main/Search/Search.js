import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from "./Search.style"
const Search = () => {
  return (
    <View>
      <Text style={styles.searchTitle}>Search</Text>
      <View style={styles.searchInput}>
        <TextInput placeholderTextColor="#fff" style={styles.searchInputText} placeholder='Search'  />
      </View>
    </View>
  )
}

export default Search