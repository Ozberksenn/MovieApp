import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from "./Search.style"
import { useSelector } from 'react-redux'
const Search = () => {
  const {activeTheme} = useSelector(state => state.theme)
  return (
    <View style={[styles.container,{backgroundColor:activeTheme.backgroundColor}]}>
      <Text style={[styles.searchTitle,{color:activeTheme.headerTitle}]}>Search</Text>
      <View style={styles.searchInput}>
        <TextInput placeholderTextColor="#000" style={styles.searchInputText} placeholder='Search'  />
      </View>
    </View>
  )
}

export default Search