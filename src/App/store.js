import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/userDetails"
export const store = configureStore({
  reducer: {
   app : userReducer
  },
})
