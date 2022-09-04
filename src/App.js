import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './Components/CustomTabBar/CustomTabBar';

import SignIn from './Screens/Login/SignIn/SignIn';
import SignUp from './Screens/Login/SignUp/SignUp';

import Home from "./Screens/Main/Home/Home"
import Search from "./Screens/Main/Search/Search"
import MovieDetail from "./Screens/Main/MovieDetail/MovieDetail"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Main = () => {
  return(
    <Tab.Navigator tabBar={props => <CustomTabBar /> } screenOptions={{headerShown:false}}>
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