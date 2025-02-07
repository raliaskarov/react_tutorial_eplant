// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';          //cartReducer  manages the state slice related to the shopping cart.

export const store = configureStore({           //onfiguration object passed to configureStore(), the reducer
    reducer: {                                  // reducer key specifies the reducer functions
        cart: cartReducer,                      // cartReducer is assigned to manage the cart slice of the state
    },
});
export default store;
