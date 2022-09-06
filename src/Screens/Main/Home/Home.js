import { View, SafeAreaView, Text,ScrollView,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from "./Home.style"
import FilterButton from '../../../Components/FilterButton/FilterButton'
import axios from 'axios'
import MovieCard from '../../../Components/MovieCard/MovieCard'
import { useSelector } from 'react-redux'

const Home = () => {
  const {activeTheme} = useSelector(state => state.theme)
  const [fetchData,setFetchData] = useState([])

  useEffect(() => {
    handleTopRated() // uygulama yüklendiğinde top rated kategorisini listeletmek için kullandım.
  }, [])
  
  const renderSeperator = () => <View style={styles.seperator} />;

  const top_ratedData = "https://api.themoviedb.org/3/movie/top_rated?api_key=84c4c1e940f1e77c4ef491c8ff9ede7e&language=en-US&page=1"
  const latestData = "https://api.themoviedb.org/3/movie/now_playing?api_key=84c4c1e940f1e77c4ef491c8ff9ede7e&language=en-US&page=1"
  const popularData = "https://api.themoviedb.org/3/movie/popular?api_key=84c4c1e940f1e77c4ef491c8ff9ede7e&language=en-US&page=1"
  const upComingData = "https://api.themoviedb.org/3/movie/upcoming?api_key=84c4c1e940f1e77c4ef491c8ff9ede7e&language=en-US&page=1"

  const handleTopRated = async () => {
   const response =  await axios.get(top_ratedData) 
    setFetchData(response.data.results)
  }
  const handleLatest = async () => {
    const response =  await axios.get(latestData) 
    setFetchData(response.data.results) 
  }
  const handlePopular = async () => {
    const response =  await axios.get(popularData) 
    setFetchData(response.data.results)
  }
  const handleUpcoming = async () => {
    const response =  await axios.get(upComingData) 
    setFetchData(response.data.results)
  }
  // console.log(fetchData)
  return (
    <SafeAreaView style={[styles.Homecontainer,{backgroundColor:activeTheme.backgroundColor}]} >
        <View>
          <Text style={[styles.HomeTitle,{color:activeTheme.headerTitle}]}>Home</Text>
        </View>
        <View>
          <ScrollView horizontal={true} >
            <View style={{flexDirection:"row"}}>
              <FilterButton onPress={handleTopRated} filterButtonName="Top Rated" />
              <FilterButton onPress={handleLatest} filterButtonName="Latest" />
              <FilterButton onPress={handlePopular} filterButtonName="Popular" />
              <FilterButton onPress={handleUpcoming} filterButtonName="Upcoming" />
            </View>
          </ScrollView>
        </View>
        <View>
          <FlatList style={{height:"85%"}} ItemSeparatorComponent={renderSeperator} data={fetchData} renderItem={({item}) => <MovieCard data={item} />} />
        </View>
    </SafeAreaView>
  )
}

export default Home