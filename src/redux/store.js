import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/CartSlice';
import productReducer from './slices/ProductSlice'
import modalReducer from './slices/ModalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        modal: modalReducer
    }
})



