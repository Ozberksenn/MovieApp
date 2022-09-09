import {View, SafeAreaView, Image, Text} from 'react-native';
import React from 'react';
import styles from './MovieDetail.style';
import Button from '../../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux/userSlice';
const MovieDetail = () => {
  const dispatch = useDispatch();
  const {activeTheme} = useSelector(state => state.theme);
  const {userInfo} = useSelector(state => state.user);
  const navigation = useNavigation();

  const handleLogOut = () => {
    dispatch(logout({}));
  };
  return (
    <SafeAreaView
      style={[
        styles.movieDetailContainer,
        {backgroundColor: activeTheme.backgroundColor},
      ]}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.DetailImage}
            source={{
              uri: 'https://popcultura.com.br/wp-content/uploads/2020/06/TheOfficeColdOpens.jpg',
            }}
          />
        </View>
        <Text style={styles.userName}>{userInfo.userName}</Text>
        <View>
          <Button
            onPress={() => navigation.navigate('ThemeScreen')}
            ButtonName="Theme"
          />
          <Button
            onPress={() => navigation.navigate('EditProfile')}
            ButtonName="Edit Profile"
          />
        </View>
      </View>
      <View>
        <Button onPress={handleLogOut} ButtonName="Log Out" />
      </View>
    </SafeAreaView>
  );
};

export default MovieDetail;
