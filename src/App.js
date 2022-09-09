import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './redux/Store';
import CustomTabBar from './Components/CustomTabBar/CustomTabBar';

import SignIn from './Screens/Login/SignIn/SignIn';
import SignUp from './Screens/Login/SignUp/SignUp';

import Movie from './Screens/Main/Movie/Movie';

import Home from './Screens/Main/Home/Home';
import Search from './Screens/Main/Search/Search';
import MovieDetail from './Screens/Main/MovieDetail/MovieDetail';
import ThemeScreen from './Screens/Main/MovieDetail/Theme/Theme';
import EditProfile from './Screens/Main/MovieDetail/EditProfile/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />} // bottom tab navigation yapısını custom olarak oluşturduk.
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MovieDetail" component={MovieDetail} />
    </Tab.Navigator>
  );
};

const Login = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const Content = () => {
  const [localData, setLocalData] = useState(null);
  const {userInfo} = useSelector(state => state.user);

  const getLocalUser = async () => {
    const response = await AsyncStorage.getItem('userKey');
    const local = response ? JSON.parse(response) : null;
    setLocalData(local);
    console.log('local data', local);
  };

  useEffect(() => {
    getLocalUser();
  }, [userInfo]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!localData ? (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Movie" component={Movie} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Content />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
