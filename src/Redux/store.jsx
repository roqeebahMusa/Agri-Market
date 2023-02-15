import { configureStore } from '@reduxjs/toolkit'
import eCommerce from "../Redux/Features"

export const store = configureStore({
  reducer: {
    commerce : eCommerce
  },
})
