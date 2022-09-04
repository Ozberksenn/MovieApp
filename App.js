import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './src/Screens/Login/SignIn/SignIn';
import SignUp from './src/Screens/Login/SignUp/SignUp';

import Home from "./src/Screens/Main/Home/Home"
import Search from "./src/Screens/Main/Search/Search"
import MovieDetail from "./src/Screens/Main/MovieDetail/MovieDetail"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Main = () => {
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='Home' component={Home}  />
      <Tab.Screen name='Search' component={Search}  />
      <Tab.Screen name='MovieDetail' component={MovieDetail}  />
    </Tab.Navigator>
  )
}

const Login = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}} >
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Login' component={Login}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App