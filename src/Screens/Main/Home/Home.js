import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import styles from "./Home.style"
const Home = () => {
  return (
    <SafeAreaView >
        <View>
          <Text style={styles.HomeTitle}>Home</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home