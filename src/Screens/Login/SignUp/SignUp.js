import {View, SafeAreaView, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './SignUp.style';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from '../../../redux/userSlice';
const SignUp = ({navigation}) => {
  const {activeTheme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [mail, setMail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();

  const handleSignUp = () => {
    if (userName && password && passwordAgain && mail) {
      postRequests();
      // navigation.navigate('SignIn_one');
      Alert.alert(
        'Successed',
        'Your registration has been successfully completed',
      );
    } else {
      Alert.alert('Wrong', 'Information should not be empty!');
    }
  };

  const postRequests = () => {
    dispatch(
      addUser({
        email: mail,
        userName: userName,
        password: password,
        passwordAgain: passwordAgain,
      }),
    );
  };
  return (
    <SafeAreaView
      style={[
        styles.signUpContainer,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <View>
        <Text style={[styles.signUpTitle, {color: activeTheme.signTitle}]}>
          Sign Up
        </Text>
      </View>
      <View>
        <Input onChangeText={value => setMail(value)} placeholder="Email" />
        <Input
          onChangeText={value => setUserName(value)}
          placeholder="User Name"
        />
        <Input
          secure
          onChangeText={value => setPassword(value)}
          placeholder="Password"
        />
        <Input
          secure
          onChangeText={value => setPasswordAgain(value)}
          placeholder="Password(Again)"
        />
        <Button onPress={handleSignUp} ButtonName="Sign Up" />
      </View>
      <View>
        <Text style={[styles.accountText, {color: activeTheme.color}]}>
          Do You Have An Account ?{' '}
        </Text>
        <Button
          onPress={() => navigation.navigate('SignIn')}
          ButtonName="Sign In"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
