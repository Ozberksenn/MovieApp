import {SafeAreaView, View, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './EditProfile.style';
import Input from '../../../../Components/Input/Input';
import Button from '../../../../Components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../../../../redux/userSlice';
import {useNavigation} from '@react-navigation/native';
const EditProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {activeTheme} = useSelector(state => state.theme);
  const {userInfo} = useSelector(state => state.user);
  const [local, setLocal] = useState(); // local storage den çektiğim bilgiler bu state de tutuluyor.

  const [mail, setEditMail] = useState();
  const [password, setEditPassword] = useState();
  const [passwordAgain, setEditPasswordAgain] = useState();

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('userKey');
    const localData = userData ? JSON.parse(userData) : null;
    setLocal(localData);
    setEditMail(localData.email);
    setEditPassword(localData.password);
    setEditPasswordAgain(localData.passwordAgain);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSaveButon = () => {
    if (mail && password && local && passwordAgain) {
      dispatch(
        updateUser({
          email: mail,
          userName: local.userName,
          password: password,
          passwordAgain: passwordAgain,
        }),
      ); // bilgileri global state de değiştirdik.
      navigation.navigate('MovieDetail');
    } else {
      Alert.alert('Warning', 'values should not be empty');
    }
    console.log('Edit Profile : ', mail, password, passwordAgain);
  };
  console.log('Edit Profil page then edited info, userInfo : ', userInfo);

  return (
    <SafeAreaView
      style={[
        styles.EditProfileContainer,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <View>
        <Text style={styles.titles}>E-Mail</Text>
        <Input
          defaultValue={local?.email}
          onChangeText={value => setEditMail(value)}
          placeholder="E-mail"
        />
        <Text style={styles.titles}>Password</Text>
        <Input
          defaultValue={local?.password}
          onChangeText={value => setEditPassword(value)}
          placeholder="Password"
        />
        <Text style={styles.titles}>Password Again</Text>
        <Input
          defaultValue={local?.passwordAgain}
          onChangeText={value => setEditPasswordAgain(value)}
          placeholder="Password Again"
        />
        <View style={{marginTop: 40}}>
          <Button onPress={handleSaveButon} ButtonName="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
