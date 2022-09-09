import {SafeAreaView, View, Text, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './SignIn.style';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../../redux/userSlice';
import axios from 'axios';

const SignIn = ({navigation}) => {
  const {activeTheme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [mail, setSign_Mail] = useState();
  const [password, setSign_Password] = useState();

  const handleSignIn = async () => {
    let isUserFound = false;
    if (mail && password) {
      const response = await axios.get('http://10.0.2.2:3000/users');
      response.data.map(e => {
        // get methodu ile çektiğimiz json server datamızı mapliyoruz.
        if (e.email === mail && e.password === password) {
          isUserFound = true;
          dispatch(
            setUser({
              id: e.id,
              email: e.email,
              userName: e.userName,
              password: e.password,
              passwordAgain: e.passwordAgain,
            }),
          ); // set user statemize email ve password bilgilerini async storageye yazdırmak için gönderiyoruz.
        }
      });
      if (!isUserFound) {
        Alert.alert('Warning', 'User not found!');
      }
    } else {
      Alert.alert('Wrong', 'Information should not be empty');
    }
  };

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
            value={mail}
            onChangeText={value => setSign_Mail(value)}
            placeholder="Mail"
          />
          <Input
            secure
            value={password}
            onChangeText={value => setSign_Password(value)}
            placeholder="Password"
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
