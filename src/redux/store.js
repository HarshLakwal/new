import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import {userCart,cart} from "./cartSlice.js"
import sellSlice from "./sellSlice.js";
const Store = configureStore({
  reducer: {
    user: authSlice,
    cart: cart,
    sell: sellSlice,
    userCart: userCart
  },
});

export default Store;
 