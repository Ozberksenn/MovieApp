import { configureStore } from '@reduxjs/toolkit'
import theme from "./themeSlice"

export default configureStore({
  reducer: {
    theme, // es6 nin bize sağladığı avantaj sayesinde theme: theme yerine theme, şeklinde de kullanabiliriz.
  }
})


