import {SafeAreaView, View, Text, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './SignIn.style';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../../redux/userSlice';
import AsyncStoragee from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const {activeTheme} = useSelector(state => state.theme);
  const {userInfo} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [mail, setSign_Mail] = useState();
  const [password, setSign_Password] = useState();

  const handleSignIn = async () => {
    if (mail && password) {
      dispatch(setUser({email: mail, password: password})); // set user statemize email ve password bilgilerini async storageye yazdırmak için gönderiyoruz.
      navigation.navigate('Main');
    } else {
      Alert.alert('Wrong', 'Information should not be empty');
    }
  };



  // const getUser = async () => {
  //   const userData = await AsyncStoragee.getItem('userKey');
  //   const local = userData ? JSON.parse(userData) : null;
  //   setLocal(local);
  //   console.log(local)
  // };

  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/cannes.png')}
          />
        </View>
        <View>
          <Text style={[styles.titleSignIn, {color: activeTheme.signTitle}]}>
            Sign In
          </Text>
          <Input
            onChangeText={value => setSign_Mail(value)}
            placeholder="Please can you enter the mail"
          />
          <Input
            onChangeText={value => setSign_Password(value)}
            placeholder="Please can you enter the password"
          />
          <Button onPress={handleSignIn} ButtonName="Sign In" />
        </View>
        <View>
          <Text style={[styles.accountText, {color: activeTheme.color}]}>
            Don't Have An Account ?{' '}
          </Text>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            ButtonName="Sign Up"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
