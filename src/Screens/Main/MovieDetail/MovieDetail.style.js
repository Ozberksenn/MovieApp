import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movieDetailContainer: {
    flex: 1,
    backgroundColor: '#F9F2ED',
    justifyContent: 'space-around',
  },
  DetailImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
});
