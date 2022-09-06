import { configureStore } from '@reduxjs/toolkit'
import theme from "./themeSlice"
import user from "./userSlice"

export default configureStore({
  reducer: {
    theme, // es6 nin bize sağladığı avantaj sayesinde theme: theme yerine theme, şeklinde de kullanabiliriz.
    user,
  }
})


