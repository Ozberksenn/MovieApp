import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // local storage import.
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUser: (state, action) => {
      AsyncStorage.setItem('userKey', JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    addUser: (state, action) => {
      axios.post('http://10.0.2.2:3000/users', action.payload);
      //dataya inputtan girilen değerleri gönderiyoruz.
      AsyncStorage.setItem('userKey', JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    updateUser: (state, action) => {
      const mailQuery = `http://10.0.2.2:3000/users/${action.payload.id}`;
      axios.put(mailQuery, action.payload);
      console.log('mailQuery : ', mailQuery);
      AsyncStorage.setItem('userKey', JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      AsyncStorage.removeItem('userKey');
      state.userInfo = action.payload;
      // kullanıcı çıkış yapmak istediğinde kullanılacak olan slice.
    },
  },
});

export const {setUser, addUser, updateUser, logout} = userSlice.actions;

export default userSlice.reducer;
